import React from 'react';

import { MenuPageLayout } from '../../components';

import CreateServer from './create-server';
import FindServers from './find-servers';
import LocalGame from './local-game';

const ServersPage = () => {
    const items = [
        { id: 0, path: '/find_servers', title: 'ПОИСК СЕРВЕРОВ', element: <FindServers /> },
        { id: 1, path: '/create_server', title: 'СОЗДАТЬ СЕРВЕР', element: <CreateServer /> },
        { id: 2, path: '/local_game', title: 'ЛОКАЛЬНАЯ ИГРА', element: <LocalGame /> },
        { id: 3, path: '/main', title: 'ВЕРНУТСЯ В МЕНЮ' },
    ];

    return <MenuPageLayout items={items} root={'home/servers'} />;
};

export default ServersPage;
