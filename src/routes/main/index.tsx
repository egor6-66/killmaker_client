import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import Api from '@/api';
import { Box, Menu } from '@/components';
import { engineApi } from '@/utils';

import styles from './styles.module.scss';

const MainPage = () => {
    const navigate = useNavigate();
    const { data } = Api.user.getViewer();
    const logout = Api.auth.logout();

    const menuItems = useMemo(() => {
        const items = [
            { locationId: 1.1, globalId: 2, path: '/servers', title: 'СЕРВЕ' },
            { locationId: 1.2, globalId: 3, path: '/settings', title: 'НАСТРОЙКИ' },
            { locationId: 1.3, globalId: 0, path: '/auth', title: 'ВЫХОД' },
        ];

        if (window.location.pathname.replace(/\/$/, '').split('/').pop() === 'main') {
            engineApi.setLocation(1);
        }

        return items.map((i) => ({
            id: i.globalId,
            title: i.title,
            onClick: () => {
                engineApi.setLocation(i.globalId);
                navigate(i.path);
                i.path === '/auth' && logout.mutate();
            },
            onMouseEnter: () => engineApi.setLocation(i.locationId),
            onMouseLeave: () => engineApi.setLocation(1),
        }));
    }, []);

    return (
        <Box className={styles.wrapper} direction={'vertical'}>
            <Menu items={menuItems} />
        </Box>
    );
};

export default MainPage;
