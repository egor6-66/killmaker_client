import React, { useMemo, useRef, useState } from 'react';

import Api from '@/api';
import { Box, List } from '@/components';
import { useClickAway } from '@/hooks';
import { MapsInterfaces } from '@/interfaces';

import styles from './styles.module.scss';

interface IListProps {
    selectedMap?: MapsInterfaces.IMap;
    clickMap?: (map: MapsInterfaces.IMap) => void;
}

const MapsList = (props: IListProps) => {
    const { selectedMap, clickMap } = props;
    const WrapperRef = useRef(null);
    const { data: mapsData } = Api.maps.getAll();
    const [isOpen, setIsOpen] = useState(false);

    const openClose = () => {
        setIsOpen((val) => !val);
    };

    const sortMaps = useMemo(() => {
        if (selectedMap) {
            const filters = mapsData?.data.filter((i) => i.id !== selectedMap.id);
            filters.unshift(selectedMap);

            return filters;
        }

        return mapsData?.data;
    }, [isOpen]);

    const handleMapClick = (map: MapsInterfaces.IMap) => {
        clickMap(map);
        setIsOpen(false);
    };

    useClickAway(WrapperRef, () => {
        setIsOpen(false);
    });

    return (
        <Box ref={WrapperRef} className={styles.wrapper} enableAnimation>
            <div className={styles.header} onClick={openClose}>
                {selectedMap ? <Item map={selectedMap} /> : 'ВЫБРАТЬ КАРТУ'}
            </div>
            <div className={styles.list}>
                <List list={sortMaps} isOpen={isOpen} itemClassName={styles.itemWrapper}>
                    {(map) => <Item clickMap={handleMapClick} key={map.id} map={map} />}
                </List>
            </div>
        </Box>
    );
};

interface IItemProps {
    map: MapsInterfaces.IMap;
    clickMap?: (map: MapsInterfaces.IMap) => void;
}

const Item = (props: IItemProps) => {
    const { map, clickMap } = props;

    return (
        <div className={styles.mapItem} onClick={clickMap ? () => clickMap(map) : () => ''} style={{ backgroundImage: `url(${map.preview})` }}>
            <div>Author: {map.author}</div>
            <div>Name: {map.name}</div>
        </div>
    );
};

export default MapsList;
