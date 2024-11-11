import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PageLayout } from './components';
import LocalGame from './local-game';

const BattlefieldRoutes = () => {
    return (
        <Routes>
            <Route
                path={'/local_game/:id'}
                element={
                    <PageLayout>
                        <LocalGame />
                    </PageLayout>
                }
            />
            <Route path={'*'} element={<Navigate to={'/manu/home'} />} />
        </Routes>
    );
};

export default BattlefieldRoutes;
