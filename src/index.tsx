import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './styles/index.css';
const rootElement = document.getElementById('root');

import { Button } from '@/components';
import { engineApi } from '@/utils';

import MainRoutes from './routes';
const root = createRoot(rootElement);

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnReconnect: true,
            retry: 0,
            refetchOnWindowFocus: false,
        },
    },
});

root.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            {/*<div style={{ color: 'red', width: '100%', height: '100%' }}>*/}
            {/*    <Button onClick={() => engineApi.selected(0)}>weapon1</Button>*/}
            {/*    <Button onClick={() => engineApi.selected(1)}>weapon2</Button>*/}
            {/*</div>*/}
            <MainRoutes />
        </BrowserRouter>
    </QueryClientProvider>
);
