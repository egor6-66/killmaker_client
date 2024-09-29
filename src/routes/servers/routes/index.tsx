import React from 'react';
import { Route, Routes as RRDRoutes } from 'react-router-dom';
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
            <RRDRoutes>
                {routes.map(({ id, path, element }) => (
                    <Route key={id} path={path} element={<Box animationVariants={'autoWidth'}>{element}</Box>} />
                ))}
            </RRDRoutes>
        </AnimatePresence>
    );
};

export default ServersRoutes;
