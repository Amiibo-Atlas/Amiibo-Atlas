// Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import { Global } from '@emotion/react';
import Theme from './assets/theme.ts';
import Root from './components/root.tsx';
import App from './App.tsx';
import ErrorPage from './components/shared/ErroPage.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import Login from './components/Login.tsx';
import AmiiboList from './components/AmiiboList/AmiiboList.tsx';
import AmiiboDetail from './components/AmiiboList/AmiiboDetail.tsx';
import ProfilePage from './components/UserDashboard/ProfilePage.tsx';
import AboutAmiibo from './components/AmiiboAbout.tsx';
import store from './redux/store.ts';
import WishlistPage from './components/UserDashboard/WishlistPage.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <ScrollToTop />
                <Root />
            </>
        ),
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <App /> },
            { path: '/amiibos', element: <AmiiboList /> },
            { path: '/amiibos/:amiiboId', element: <AmiiboDetail /> },
            { path: '/login', element: <Login /> },
            { path: '/account', element: <ProfilePage /> },
            { path: '/wishlist', element: <WishlistPage /> },
            { path: `/aboutamiibo`, element: <AboutAmiibo /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <Global styles={Theme()} />
                <RouterProvider router={router} />
                <ToastContainer />
            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
);
