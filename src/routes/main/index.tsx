import React from 'react';

import { Box, Button } from '@/components';

import styles from './styles.module.scss';

const MainPage = () => {
    const buttons = [
        { id: 0, title: 'СЕРВЕРЫ', link: '/servers' },
        { id: 1, title: 'НАСТРОЙКИ', link: '/settings' },
        { id: 2, title: 'ВЫХОД', link: '/login' },
    ];

    return (
        <Box className={styles.wrapper} direction={'vertical'} bg>
            {buttons.map(({ id, title, link }) => (
                <Button link={link} key={id}>
                    {title}
                </Button>
            ))}
        </Box>
    );
};

export default MainPage;
