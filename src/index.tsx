import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './styles/index.css';
const rootElement = document.getElementById('root');

import MainRoutes from './routes';
const root = createRoot(rootElement);

root.render(
    <BrowserRouter>
        <MainRoutes />
    </BrowserRouter>
);
