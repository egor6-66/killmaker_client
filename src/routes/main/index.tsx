import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Menu } from '@/components';
import { engineApi } from '@/utils';

import styles from './styles.module.scss';

const MainPage = () => {
    const navigate = useNavigate();

    const transition = (path: string, location: number) => {
        navigate(path);
        engineApi.setLocation(location);
    };

    const menuItems = [
        { id: 0, title: 'СЕРВЕРЫ', onClick: () => transition('/servers', 1) },
        { id: 1, title: 'НАСТРОЙКИ', onClick: () => transition('/settings', 2) },
        { id: 2, title: 'ВЫХОД', onClick: () => transition('/login', 3) },
    ];

    return (
        <Box className={styles.wrapper} direction={'vertical'}>
            <Menu items={menuItems} />
        </Box>
    );
};

export default MainPage;
