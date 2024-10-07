import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { engineApi } from '@/utils';

type Routes = Record<string, { path: string; index: number }>;

function useRoutesTransition() {
    const navigate = useNavigate();
    const location = useLocation();

    const authRoutes: Routes = {
        auth: { path: '/base', index: 0 },
        registration: { path: '/base/registration', index: 0.1 },
        login: { path: '/base/login', index: 0.2 },
    };

    const mainRoutes: Routes = {
        main: { path: '/main', index: 1 },
    };

    const settingsRoutes: Routes = {
        settings: { path: '/settings', index: 2 },
    };

    const serversRoutes: Routes = {
        servers: { path: '/servers', index: 3 },
        findServers: { path: '/servers/find_servers', index: 3.1 },
        createServer: { path: '/servers/create_server', index: 3.2 },
        localGame: { path: '/servers/local_game', index: 3.3 },
    };

    const allRoutes = {
        ...authRoutes,
        ...mainRoutes,
        ...settingsRoutes,
        ...serversRoutes,
    };

    useEffect(() => {
        Object.values(allRoutes).forEach((val) => {
            if (val.path === location.pathname.replace(/\/$/, '')) {
                engineApi.setLocation(val.index);
            }
        });
    }, []);

    const setLocation = (route: keyof typeof allRoutes) => {
        const target = allRoutes[route];
        navigate(target.path);
        engineApi.setLocation(target.index);
    };

    return { setLocation };
}

export default useRoutesTransition;
