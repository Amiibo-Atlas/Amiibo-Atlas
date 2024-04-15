import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/root.tsx';

import Theme from './assets/theme.ts';
import { Global } from '@emotion/react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const googleOAuthID = import.meta.env.VITE_GOOGLEOAUTH_CLIENT_ID;

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId={googleOAuthID}>
            <Global styles={Theme()} />
            <RouterProvider router={router} />
        </GoogleOAuthProvider>
    </React.StrictMode>
);
