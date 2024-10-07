import React from 'react';
import { Route, Routes as RRDRoutes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Box } from '@/components';
import styles from '@/routes/styles.module.scss';

import App from './app';
import Viewer from './viewer';

const SettingsRoutes = () => {
    const routes = [
        { id: 0, path: '/app', element: <App /> },
        { id: 1, path: '/viewer', element: <Viewer /> },
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

export default SettingsRoutes;
