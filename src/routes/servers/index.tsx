import React, { useMemo } from 'react';
import { RouteProps, useNavigate } from 'react-router-dom';

import { IMenu, PageLayout } from '@/components';
import { engineApi } from '@/utils';

import { CreateServer, FindServers, LocalGame } from './routes';

import styles from './styles.module.scss';

const ServersPage = () => {
    const navigate = useNavigate();

    const { menuItems, routes } = useMemo(() => {
        let activeId = 2.0;

        const items = [
            { locationId: 2.1, globalId: 2.1, path: '/find_servers', title: 'ПОИСК СЕРВЕРОВ', element: <FindServers /> },
            { locationId: 2.2, globalId: 2.2, path: '/create_server', title: 'СОЗДАТЬ СЕРВЕР', element: <CreateServer /> },
            { locationId: 2.3, globalId: 2.3, path: '/local_game', title: 'ЛОКАЛЬНАЯ ИГРА', element: <LocalGame /> },
            { locationId: 2.4, globalId: 1, path: '/main', title: 'ВЕРНУТСЯ В МЕНЮ' },
        ];

        const activeRoute = items.find((i) => window.location.pathname.includes(i.path))?.globalId || 2.0;

        if (activeRoute) {
            engineApi.setLocation(activeRoute);
        }

        return items.reduce(
            (acc: { menuItems: Array<IMenu.IItem>; routes: Array<RouteProps> }, i) => {
                acc.menuItems.push({
                    id: i.locationId,
                    title: i.title,
                    onClick: () => {
                        engineApi.setLocation(i.globalId);
                        navigate(i.path === '/main' ? i.path : '/servers' + i.path);
                        activeId = i.globalId;
                    },
                    onMouseEnter: () => engineApi.setLocation(i.locationId),
                    onMouseLeave: () => engineApi.setLocation(activeId),
                });
                i.element && acc.routes.push({ path: i.path, element: i.element });

                return acc;
            },
            { menuItems: [], routes: [] }
        );
    }, []);

    return <PageLayout menuItems={menuItems} routes={routes} />;
};

export default ServersPage;
