import React, { useEffect } from 'react';
import { Route, Routes as RRDRoutes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import MainPage from './main';
import SettingsPage from './settings';

import styles from './styles.module.scss';

const MainRoutes = () => {
    const location = useLocation();

    const currentMenu = {
        '': 0,
        '/main': 0,
        '/settings': 1,
        '/settings/app': 1.1,
        '/settings/viewer': 1.2,
    };

    useEffect(() => {
        __location__ = currentMenu[location.pathname.replace(/\/$/, '')];
    }, [location.pathname]);

    const routes = [
        { id: 0, path: '/', element: <MainPage /> },
        { id: 1, path: '/main', element: <MainPage /> },
        { id: 2, path: '/settings/*', element: <SettingsPage /> },
    ];

    return (
        <AnimatePresence mode={'wait'} initial={false}>
            <RRDRoutes location={location} key={location.pathname.split('/')[1]}>
                {routes.map(({ id, path, element }) => (
                    <Route key={id} path={path} element={<div className={styles.wrapper}>{element}</div>} />
                ))}
            </RRDRoutes>
        </AnimatePresence>
    );
};

export default MainRoutes;
