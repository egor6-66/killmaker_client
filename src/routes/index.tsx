import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Box, Loaders } from '@/components';
import { useEngine } from '@/hooks';
import { AuthProvider, EngineProvider } from '@/proveders';

import BattlefieldRoutes from './battlefield';
import MenuRoutes from './menu';

import styles from './styles.module.scss';

const MainRoutes = () => {
    const { engineIsLoaded } = useEngine();
    const location = useLocation();

    return (
        <AuthProvider>
            <div className={styles.wrapper}>
                {engineIsLoaded ? (
                    <EngineProvider key={'provider'}>
                        <AnimatePresence mode={'wait'}>
                            <Routes location={location} key={location.pathname.split('/')[1]}>
                                <Route path={'/menu/*'} element={<MenuRoutes />}></Route>
                                <Route path={'/battlefield/*'} element={<BattlefieldRoutes />} />
                                <Route path={'*'} element={<Navigate to={'/menu/auth'} />} />
                            </Routes>
                        </AnimatePresence>
                    </EngineProvider>
                ) : (
                    <Loaders.Engine key={'loader'} visible />
                )}
            </div>
        </AuthProvider>
    );
};

export default MainRoutes;
