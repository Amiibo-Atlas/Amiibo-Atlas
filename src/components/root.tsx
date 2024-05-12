// Dependencies
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

// Components
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

const RootContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const MainContent = styled.div`
    flex: 1 0 auto;
    background-color: #f2f2f2;
`;

export default function Root({ children }: { children?: ReactNode }) {
    return (
        <RootContainer>
            <Navbar />
            <MainContent>{children || <Outlet />}</MainContent>
            <Footer />
        </RootContainer>
    );
}
