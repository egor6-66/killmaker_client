import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { engineApi } from '@/utils';

const BattlefieldRoutes = () => {
    const location = useLocation();

    return (
        <div>
            <AnimatePresence mode={'wait'}>
                <Routes location={location} key={location.pathname.split('/')[1]}>
                    <Route
                        path={'battlefield'}
                        element={
                            <div style={{ color: 'red', width: '100%', height: '100%' }}>
                                <button onClick={() => engineApi.selected(2)}>dwadwdd</button>
                            </div>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </div>
    );
};

export default BattlefieldRoutes;
