import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { engineApi } from '@/utils';

type MainRoute = 'auth' | 'main' | 'settings' | 'servers';
type SubRoute = 'auth' | 'main' | 'settings' | 'servers';

function useRoutesTransition() {
    const navigate = useNavigate();
    const location = useLocation();

    const mainRoutes: Record<MainRoute, { path: string; index: number }> = {
        auth: {
            path: '/auth',
            index: 0,
        },
        main: {
            path: '/main',
            index: 1,
        },
        servers: {
            path: '/servers',
            index: 2,
        },
        settings: {
            path: '/settings',
            index: 3,
        },
    };

    useEffect(() => {
        if (location.pathname) {
            const [root, main, sub] = location.pathname.split('/');

            if (!main && !sub) {
                engineApi.setLocation(mainRoutes['main'].index);
            }

            if (main && main in mainRoutes) {
                console.log('wdadwd');
                engineApi.setLocation(mainRoutes[main].index);
            }

            if (sub && sub in mainRoutes) {
                // engineApi.setLocation(mainRoutes[main].index);
            }
        }
    }, []);

    const setMainLocation = (route: MainRoute) => {
        const target = mainRoutes[route];
        navigate(target.path);
        engineApi.setLocation(target.index);
    };

    return { setMainLocation };
}

export default useRoutesTransition;
