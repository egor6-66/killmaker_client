import React from 'react';

import { Box, Menu } from '@/components';
import { useRoutesTransition } from '@/hooks';

import ServersRoutes from './routes';

import styles from './styles.module.scss';

const ServersPage = () => {
    const { setLocation } = useRoutesTransition();

    const menuItems = [
        { id: 0, title: 'ПОИСК СЕРВЕРОВ', onClick: () => setLocation('findServers') },
        { id: 1, title: 'СОЗДАТЬ СЕРВЕР', onClick: () => setLocation('createServer') },
        { id: 2, title: 'ЛОКАЛЬНАЯ ИГРА', onClick: () => setLocation('localGame') },
        { id: 3, title: 'ВЕРНУТСЯ В МЕНЮ', onClick: () => setLocation('main') },
    ];

    return (
        <Box className={styles.wrapper}>
            <Box className={styles.nav} direction={'vertical'}>
                <Menu items={menuItems} />
            </Box>
            <ServersRoutes />
        </Box>
    );
};

export default ServersPage;
