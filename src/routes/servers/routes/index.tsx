import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Box } from '@/components';
import styles from '@/routes/styles.module.scss';

import CreateServer from './create-server';
import FindServers from './find-servers';
import LocalGame from './local-game';

const ServersRoutes = () => {
    const routes = [
        { id: 0, path: '/create_server', element: <CreateServer /> },
        { id: 1, path: '/find_servers', element: <FindServers /> },
        { id: 1, path: '/local_game', element: <LocalGame /> },
    ];

    return (
        <AnimatePresence mode={'wait'}>
            <Routes>
                {routes.map(({ id, path, element }) => (
                    <Route
                        key={id}
                        path={path}
                        element={
                            <Box className={styles.wrapper} animationVariants={'autoWidth'}>
                                {element}
                            </Box>
                        }
                    />
                ))}
            </Routes>
        </AnimatePresence>
    );
};

export default ServersRoutes;
