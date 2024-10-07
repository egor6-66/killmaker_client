import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Api from '@/api';

import AuthPage from './auth';
import HomeRoutes from './home';

import styles from './styles.module.scss';

const MainRoutes = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { data: viewer } = Api.user.getViewer();

    useEffect(() => {
        if (!location.pathname.includes('auth') && !viewer?.data) {
            navigate('/auth');
        }
    }, [viewer?.data]);

    return (
        <div className={styles.wrapper}>
            <AnimatePresence mode={'wait'} initial={false}>
                <Routes>
                    <Route path={'/auth/*'} element={<AuthPage />} />
                    <Route path={'/home/*'} element={<HomeRoutes />} />
                    <Route path={'*'} element={<Navigate to={'/home'} />} />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default MainRoutes;
