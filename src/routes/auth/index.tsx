import React from 'react';

import { Box, Menu } from '@/components';
import { useRoutesTransition } from '@/hooks';

import styles from './styles.module.scss';

const AuthPage = () => {
    const { setLocation } = useRoutesTransition();

    const menuItems = [
        // { id: 0, title: 'ПРИЛОЖЕНИЕ', onClick: () => setMainLocation('main') },
        // { id: 1, title: 'АККАУНТ', onClick: () => setMainLocation('main') },
        { id: 2, title: 'ВЕРНУТСЯ В МЕНЮ', onClick: () => setLocation('main') },
    ];

    return (
        <Box className={styles.wrapper}>
            <Box className={styles.nav} direction={'vertical'}>
                <Menu items={menuItems} />
            </Box>
        </Box>
    );
};

export default AuthPage;