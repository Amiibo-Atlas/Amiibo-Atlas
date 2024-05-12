// Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Components
import Root from './components/root.tsx';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import Register from './components/Register.tsx';
import Login from './components/Login.tsx';
import AmiiboList from './components/AmiiboList/AmiiboList.tsx';
import AmiibosParams from './pages/AmiibosParams.tsx';
import { Global } from '@emotion/react';
import Theme from './assets/theme.ts';
import store from './redux/store.ts';
import WishlistPage from './pages/WishlistPage.tsx';
import ProfilePage from './pages/ProfilePage.tsx';
import ErrorPage from './components/shared/ErroPage.tsx';

const queryClient = new QueryClient();

const googleOAuthID = import.meta.env.VITE_GOOGLEOAUTH_CLIENT_ID;

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <App /> },
            { path: '/home', element: <Home /> },
            { path: '/amiibos', element: <AmiiboList /> },
            { path: '/amiibos/:id', element: <AmiibosParams /> },
            { path: '/signup', element: <Register /> },
            { path: '/login', element: <Login /> },
            { path: '/wishlist', element: <WishlistPage /> },
            { path: '/profile', element: <ProfilePage /> },
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
