import React, { useRef, useState } from 'react';

import Api from '@/api';
import { Box, Button, Image, List } from '@/components';
import { useClickAway } from '@/hooks';

import styles from './styles.module.scss';

const Header = () => {
    const { data: viewer } = Api.user.getViewer();
    const dropDownRef = useRef();
    const [isOpen, setIsOpen] = useState(false);

    const drop = () => {
        setIsOpen((val) => !val);
    };

    const rows = [
        { id: 0, element: <Image src={viewer?.data?.avatar} /> },
        { id: 0, element: <div>{viewer?.data.nickname}</div> },
        {
            id: 0,
            element: (
                <Button
                    onClick={() => {
                        document.getElementById('fullscreen_request').click();
                    }}
                >
                    FULL SCREEN
                </Button>
            ),
        },
    ];

    useClickAway(dropDownRef, () => {
        setIsOpen(false);
    });

    return (
        <div className={styles.wrapper}>
            <div className={styles.userInfo} onClick={drop}>
                menu
            </div>

            {/*<Box className={styles.dropdown} ref={dropDownRef}>*/}
            {/*    <List list={rows} isOpen={isOpen} itemClassName={styles.itemWrapper}>*/}
            {/*        {(map) => map.element}*/}
            {/*    </List>*/}
            {/*</Box>*/}
        </div>
    );
};

export default Header;
