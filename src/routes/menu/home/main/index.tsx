import React from 'react';
import { useNavigate } from 'react-router-dom';

import Api from '@/api';
import { Box, Menu } from '@/components';

import styles from './styles.module.scss';

const MainPage = () => {
    const navigate = useNavigate();

    const { mutate: logout } = Api.auth.logout();

    const handleLogout = async () => {
        await logout();
        navigate('/menu/auth');
    };

    const menuItems = [
        { id: 0, onClick: () => navigate('/menu/home/servers'), title: 'СЕРВЕР' },
        { id: 1, onClick: () => navigate('/menu/home/settings'), title: 'НАСТРОЙКИ' },
        { id: 2, onClick: handleLogout, title: 'ВЫХОД' },
    ];

    return (
        <Box className={styles.wrapper} direction={'vertical'} enableAnimation>
            <Menu items={menuItems} />
        </Box>
    );
};

export default MainPage;
