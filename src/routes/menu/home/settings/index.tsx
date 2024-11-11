import React from 'react';

import { MenuPageLayout } from '../../components';

import App from './app';
import Viewer from './viewer';

const SettingsPage = () => {
    const items = [
        { id: 1, path: '/app', title: 'ПРИЛОЖЕНИЕ', element: <App /> },
        { id: 2, path: '/profile', title: 'ПРОФИЛЬ', element: <Viewer /> },
        { id: 3, path: '/main', title: 'ВЕРНУТЬСЯ В МЕНЮ' },
    ];

    return <MenuPageLayout items={items} root={'home/settings'} />;
};

export default SettingsPage;
