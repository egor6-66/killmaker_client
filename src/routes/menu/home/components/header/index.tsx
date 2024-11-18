import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import Api from '@/api';
import { Box, Button, Image, List } from '@/components';
import { useClickAway } from '@/hooks';

import styles from './styles.module.scss';

const Path = (props) => <motion.path strokeWidth="3" strokeLinecap="round" {...props} />;

const Header = () => {
    const { data: viewer } = Api.user.getViewer();
    const dropDownRef = useRef();
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const drop = () => {
        !menuIsOpen && setMenuIsOpen(true);
    };

    const rows = [{ id: 0, element: <div className={styles.level}>LEVEL: 1</div> }];

    useClickAway(dropDownRef, () => {
        setMenuIsOpen(false);
    });

    const animate = menuIsOpen ? 'open' : 'closed';

    return (
        <div className={styles.wrapper}>
            {/*<svg onClick={drop} className={styles.openMenuBtn} width="23" height="23" viewBox="0 0 23 23">*/}
            {/*    <Path variants={{ closed: { d: 'M 2 2.5 L 20 2.5' }, open: { d: 'M 3 16.5 L 17 2.5' } }} animate={animate} />*/}
            {/*    <Path d="M 2 9.423 L 20 9.423" variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }} transition={{ duration: 0.1 }} animate={animate} />*/}
            {/*    <Path variants={{ closed: { d: 'M 2 16.346 L 20 16.346' }, open: { d: 'M 3 2.5 L 17 16.346' } }} animate={animate} />*/}
            {/*</svg>*/}

            <div className={styles.viewerInfo}>
                <Image blur src={viewer?.data?.avatar} />
                <div>{viewer?.data?.nickname}</div>
            </div>

            <Box className={styles.dropdown} ref={dropDownRef}>
                <List list={rows} isOpen={menuIsOpen} itemClassName={styles.itemWrapper}>
                    {(map) => map.element}
                </List>
            </Box>
        </div>
    );
};

export default Header;
