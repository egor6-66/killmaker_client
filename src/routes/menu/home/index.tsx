import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Box } from '@/components';

import { Header } from './components';
import MainPage from './main';
import ServersPage from './servers';
import SettingsPage from './settings';

import styles from './styles.module.scss';

const HomeRoutes = () => {
    const location = useLocation();

    const routes = [
        { id: 0, path: 'main', element: <MainPage /> },
        { id: 1, path: 'servers/*', element: <ServersPage /> },
        { id: 2, path: 'settings/*', element: <SettingsPage /> },
    ];

    return (
        <Box className={styles.wrapper} enableAnimation>
            <Box enableAnimation className={styles.header}>
                <Header />
            </Box>

            <AnimatePresence mode={'wait'}>
                <Routes location={location} key={location.pathname.split('/')[3]}>
                    {routes.map(({ id, path, element }) => (
                        <Route key={id} path={path} element={<main className={styles.main}>{element}</main>} />
                    ))}
                    <Route path="*" element={<Navigate to="main" replace />} />
                </Routes>
            </AnimatePresence>
        </Box>
    );
};

export default HomeRoutes;
