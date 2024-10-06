import React, { useMemo } from 'react';
import { RouteProps, useNavigate } from 'react-router-dom';

import { IMenu, PageLayout } from '@/components';
import Login from '@/routes/auth/routes/login';
import Registration from '@/routes/auth/routes/registration';
import { engineApi } from '@/utils';

const AuthPage = () => {
    const navigate = useNavigate();

    const { menuItems, routes } = useMemo(() => {
        let activeId = 0.0;

        const items = [
            { id: 0.1, path: '/login', title: 'ЛОГИН', element: <Login /> },
            { id: 0.2, path: '/registration', title: 'РЕГИСТРАЦИЯ', element: <Registration /> },
        ];

        const activeRoute = items.find((i) => '/' + i.path === window.location.pathname.replace(/\/$/, '').split('/').pop());

        if (activeRoute) {
            engineApi.setLocation(activeRoute.id);
        }

        return items.reduce(
            (acc: { menuItems: Array<IMenu.IItem>; routes: Array<RouteProps> }, i) => {
                acc.menuItems.push({
                    id: i.id,
                    title: i.title,
                    onClick: () => {
                        engineApi.setLocation(i.id);
                        navigate('/auth' + i.path);
                        activeId = i.id;
                    },
                    onMouseEnter: () => engineApi.setLocation(i.id),
                    onMouseLeave: () => engineApi.setLocation(activeId || 0.0),
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
