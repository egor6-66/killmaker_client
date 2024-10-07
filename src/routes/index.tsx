import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import AuthPage from './auth';
import MainPage from './main';
import ServersPage from './servers';
import SettingsPage from './settings';

import styles from './styles.module.scss';

const MainRoutes = () => {
    const location = useLocation();

    const routes = [
        { id: 0, path: '/auth/*', element: <AuthPage /> },
        { id: 1, path: '/main' || '/', element: <MainPage /> },
        { id: 2, path: '/servers/*', element: <ServersPage /> },
        { id: 3, path: '/settings/*', element: <SettingsPage /> },
    ];

    return (
        <AnimatePresence mode={'wait'} initial={false}>
            <Routes location={location} key={location.pathname.split('/')[1]}>
                {routes.map(({ id, path, element }) => (
                    <Route key={id} path={path} element={<div className={styles.wrapper}>{element}</div>} />
                ))}
                <Route path="*" element={<Navigate to="/main" replace />} />
            </Routes>
        </AnimatePresence>
    );
};

export default MainRoutes;
