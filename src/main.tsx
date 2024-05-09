import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/root.tsx';

import Home from './pages/Home.tsx';
import AmiiboList from './components/AmiiboList/AmiiboList.tsx';
import Compare from './pages/Compare.tsx';
import Signup from './pages/Signup.tsx';
import LoginPage from './pages/LoginPage.tsx';
import AmiibosParams from './pages/AmiibosParams.tsx';

import Theme from './assets/theme.ts';
import { Global } from '@emotion/react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import store from './redux/store.ts';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WishlistPage from './pages/WishlistPage.tsx';
import ProfilePage from './pages/ProfilePage.tsx';
import Splash from './pages/Splash.tsx';

const queryClient = new QueryClient();

const googleOAuthID = import.meta.env.VITE_GOOGLEOAUTH_CLIENT_ID;

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, element: <Splash /> },
            { path: 'home', element: <Home /> },
            { path: 'amiibos', element: <AmiiboList /> },
            { path: 'amiibos/:id', element: <AmiibosParams /> },
            { path: 'compare', element: <Compare /> },
            { path: 'signup', element: <Signup /> },
            { path: 'login', element: <LoginPage /> },
            { path: 'wishlist', element: <WishlistPage /> },
            { path: 'profile', element: <ProfilePage /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <GoogleOAuthProvider clientId={googleOAuthID}>
                <QueryClientProvider client={queryClient}>
                    <Global styles={Theme()} />
                    <RouterProvider router={router} />
                </QueryClientProvider>
            </GoogleOAuthProvider>
        </Provider>
    </React.StrictMode>
);
