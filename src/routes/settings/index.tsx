import React from 'react';

import { Box, Button } from '@/components';

import SettingsRoutes from './routes';

import styles from './styles.module.scss';

const SettingsPage = () => {
    const buttons = [
        { id: 0, title: 'ПРИЛОЖЕНИЕ', link: 'app' },
        { id: 1, title: 'АККАУНТ', link: 'viewer' },
        { id: 2, title: 'ВЕРНУТСЯ В МЕНЮ', link: '/main' },
    ];

    return (
        <Box className={styles.wrapper}>
            <Box className={styles.buttons} direction={'vertical'} bg>
                {buttons.map(({ id, title, link }) => (
                    <Button link={link} key={id}>
                        {title}
                    </Button>
                ))}
            </Box>
            <SettingsRoutes />
        </Box>
    );
};

export default SettingsPage;
