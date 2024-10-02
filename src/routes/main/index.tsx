import React from 'react';

import { Box, Menu } from '@/components';
import { useRoutesTransition } from '@/hooks';
import { engineApi } from '@/utils';

import styles from './styles.module.scss';

const MainPage = () => {
    const { setLocation } = useRoutesTransition();

    const menuItems = [
        { id: 0, title: 'СЕРВЕРЫ', onClick: () => setLocation('servers') },
        { id: 1, title: 'НАСТРОЙКИ', onClick: () => setLocation('settings') },
        {
            id: 2,
            title: 'ВЫХОД',
            onClick: () => {
                engineApi.setAuth(0);
                setTimeout(() => {
                    setLocation('auth');
                }, 700);
            },
        },
    ];

    return (
        <Box className={styles.wrapper} direction={'vertical'}>
            <Menu items={menuItems} />
        </Box>
    );
};

export default MainPage;
