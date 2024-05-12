import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import Navbar from './Navbar';
import Footer from './Footer';
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Content = styled.div`
    flex: 1 0 auto;
    background-color: #f2f2f2;
`;

const AlignFooter = styled.div`
    flex-shrink: 0;
`;

export default function Root({ children }: { children?: ReactNode }) {
    return (
        <Container>
            <ScrollToTop />
            <Navbar />
            <Content>
                {children || <Outlet />}
            </Content>
            <AlignFooter>
                <Footer />
            </AlignFooter>
        </Container>
    );
}
