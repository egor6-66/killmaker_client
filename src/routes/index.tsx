import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import AuthPage from './auth';
import MainPage from './main';
import ServersPage from './servers';
import SettingsPage from './settings';

import styles from './styles.module.scss';

const MainRoutes = () => {
    const routes = [
        { id: 0, path: '/auth/*', element: <AuthPage /> },
        { id: 1, path: '/main' || '/', element: <MainPage /> },
        { id: 2, path: '/servers/*', element: <ServersPage /> },
        { id: 3, path: '/settings/*', element: <SettingsPage /> },
    ];

    return (
        <AnimatePresence mode={'wait'} initial={false}>
            <Routes>
                {routes.map(({ id, path, element }) => (
                    <Route key={id} path={path} element={<div className={styles.wrapper}>{element}</div>} />
                ))}
            </Routes>
        </AnimatePresence>
    );
};

export default MainRoutes;
