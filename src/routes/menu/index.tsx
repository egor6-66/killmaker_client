import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { MenuProvider } from '@/proveders';

import AuthPage from './auth';
import HomeRoutes from './home';

const MenuRoutes = () => {
    const location = useLocation();

    return (
        <MenuProvider>
            <AnimatePresence mode={'wait'}>
                <Routes location={location} key={location.pathname.split('/')[2]}>
                    <Route path={'/auth/*'} element={<AuthPage />} />
                    <Route path={'/home/*'} element={<HomeRoutes />} />
                    <Route path={'*'} element={<Navigate to={'/menu/home/main'} />} />
                </Routes>
            </AnimatePresence>
        </MenuProvider>
    );
};

export default MenuRoutes;
