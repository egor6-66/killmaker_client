import React from 'react';

import { Box, Menu } from '@/components';
import { useRoutesTransition } from '@/hooks';

import SettingsRoutes from './routes';

import styles from './styles.module.scss';

const SettingsPage = () => {
    const { setLocation } = useRoutesTransition();

    const menuItems = [
        { id: 0, title: 'ПРИЛОЖЕНИЕ', onClick: () => setLocation('main') },
        { id: 1, title: 'АККАУНТ', onClick: () => setLocation('main') },
        { id: 2, title: 'ВЕРНУТСЯ В МЕНЮ', onClick: () => setLocation('main') },
    ];

    return (
        <Box className={styles.wrapper} enableAnimation>
            <Box className={styles.nav} direction={'vertical'} enableAnimation>
                <Menu items={menuItems} />
            </Box>
            <SettingsRoutes />
        </Box>
    );
};

export default SettingsPage;
