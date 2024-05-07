import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

import { GlobalStyles, Container, AlignFooter } from './shared/styles/GlobalStyles';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Root({ children }: { children?: ReactNode }) {
    return (
        <>
            <GlobalStyles />
            <Container>
                <ScrollToTop />
                <Navbar />
                {children || <Outlet />}
                <AlignFooter>
                    <Footer />
                </AlignFooter>
            </Container>
        </>
    );
}
