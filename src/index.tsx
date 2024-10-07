import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import './styles/index.css';
const rootElement = document.getElementById('root');

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
            <MainRoutes />
        </BrowserRouter>
    </QueryClientProvider>
);
