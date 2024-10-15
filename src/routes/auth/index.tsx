import React, { useMemo } from 'react';
import { RouteProps, useNavigate } from 'react-router-dom';

import { IMenu } from '@/components';
import { engineApi } from '@/utils';

import { PageLayout } from '../components';

import BaseAuth from './routes/base';

const AuthPage = () => {
    const navigate = useNavigate();

    const { menuItems, routes } = useMemo(() => {
        const items = [
            { id: 0.1, path: '/login', title: 'ЛОГИН', element: <BaseAuth /> },
            { id: 0.2, path: '/registration', title: 'РЕГИСТРАЦИЯ', element: <BaseAuth /> },
        ];

        let activeRoute = items.find((i) => window.location.pathname.includes(i.path))?.id || 0.0;

        if (activeRoute !== undefined) {
            engineApi.setLocation(activeRoute);
        }

        return items.reduce(
            (acc: { menuItems: Array<IMenu.IItem>; routes: Array<RouteProps> }, i) => {
                acc.menuItems.push({
                    id: i.id,
                    title: i.title,
                    payload: i.path,
                    onClick: () => {
                        engineApi.setLocation(i.id);
                        navigate('/auth' + i.path);
                        activeRoute = i.id;
                    },
                    onMouseEnter: () => engineApi.setLocation(i.id),
                    onMouseLeave: () => engineApi.setLocation(activeRoute),
                });
                acc.routes.push({ path: i.path, element: i.element });

                return acc;
            },
            { menuItems: [], routes: [] }
        );
    }, []);

    return <PageLayout menuItems={menuItems} routes={routes} />;
};

export default AuthPage;
