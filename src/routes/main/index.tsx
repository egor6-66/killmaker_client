import React from 'react';

import { Box, Menu } from '@/components';
import { useRoutesTransition } from '@/hooks';

import styles from './styles.module.scss';

const MainPage = () => {
    const { setMainLocation } = useRoutesTransition();

    const menuItems = [
        { id: 0, title: 'СЕРВЕРЫ', onClick: () => setMainLocation('servers') },
        { id: 1, title: 'НАСТРОЙКИ', onClick: () => setMainLocation('settings') },
        { id: 2, title: 'ВЫХОД', onClick: () => setMainLocation('auth') },
    ];

    return (
        <Box className={styles.wrapper} direction={'vertical'}>
            <Menu items={menuItems} />
        </Box>
    );
};

export default MainPage;
