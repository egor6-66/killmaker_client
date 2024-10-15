import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Api from '@/api';

import AuthPage from './auth';
import BattlefieldRoutes from './battlefield';
import HomeRoutes from './home';

import styles from './styles.module.scss';

const MainRoutes = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { data: viewer, isLoading } = Api.user.getViewer();

    useEffect(() => {
        if (!isLoading) {
            if (location.pathname.includes('auth') && viewer?.data) {
                navigate('/home/main');
            }

            if (location.pathname.includes('home') && !viewer?.data) {
                navigate('/auth');
            }
        }
    }, [isLoading]);

    return (
        <div className={styles.wrapper}>
            <AnimatePresence mode={'wait'} initial={false}>
                <Routes>
                    <Route path={'/auth/*'} element={<AuthPage />} />
                    <Route path={'/home/*'} element={<HomeRoutes />} />
                    <Route path={'/battlefield/:id'} element={<BattlefieldRoutes />} />
                    <Route path={'*'} element={<Navigate to={'/home'} />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default MainRoutes;
