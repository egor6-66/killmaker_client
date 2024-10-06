import React from 'react';

import { Box, Menu } from '@/components';
import { useDebounce, useRoutesTransition } from '@/hooks';
import { engineApi } from '@/utils';

import styles from './styles.module.scss';

const MainPage = () => {
    const { setLocation } = useRoutesTransition();

    const menuItems = [
        { id: 0, title: 'СЕРВЕРЫ', onClick: () => setLocation('servers') },
        { id: 1, title: 'НАСТРОЙКИ', onClick: () => setLocation('settings') },
        { id: 2, title: 'ВЫХОД', onClick: () => setLocation('auth') },
    ];

    return (
        <Box className={styles.wrapper} direction={'vertical'}>
            <Menu items={menuItems} onMouseEnter={(id) => engineApi.setLocation(id + 1)} onMouseLeave={(id) => engineApi.setHover(0)} />
        </Box>
    );
};

export default MainPage;
