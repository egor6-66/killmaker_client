import React from 'react';

import { MenuPageLayout } from '../components';

import BaseAuth from './base';

const AuthPage = () => {
    const items = [
        { id: 1, path: '/login', title: 'ЛОГИН', element: <BaseAuth /> },
        { id: 2, path: '/registration', title: 'РЕГИСТРАЦИЯ', element: <BaseAuth /> },
    ];

    return <MenuPageLayout items={items} root={'auth'} disabledChildRoutesAnim />;
};

export default AuthPage;
