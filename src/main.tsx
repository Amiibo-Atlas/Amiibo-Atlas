import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/root.tsx';

import Home from './pages/Home.tsx';
import Amiibos from './pages/Amiibos.tsx';
import AmiibosPage from './pages/AmiibosPage.tsx';
import Compare from './pages/Compare.tsx';
import Signup from './pages/Signup.tsx';
import LoginPage from './pages/LoginPage.tsx';

import Theme from './assets/theme.ts';
import { Global } from '@emotion/react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

const googleOAuthID = import.meta.env.VITE_GOOGLEOAUTH_CLIENT_ID;

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, element: <Home /> },
            { path: 'amiibos', element: <Amiibos /> },
            { path: 'amiibos/:id', element: <AmiibosPage /> },
            { path: 'compare', element: <Compare /> },
            { path: 'signup', element: <Signup /> },
            { path: 'login', element: <LoginPage /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={googleOAuthID}>
            <QueryClientProvider client={queryClient}>
                <Global styles={Theme()} />
                <RouterProvider router={router} />
            </QueryClientProvider>
        </GoogleOAuthProvider>
    </React.StrictMode>
);
