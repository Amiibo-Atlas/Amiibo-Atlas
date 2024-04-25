import { Global, css } from '@emotion/react';
import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

import Navbar from './Navbar';
import Footer from './Footer';

const GlobalStyles = () => (
    <Global
        styles={css`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            html, body {
                width: 100%;
                height: 100%;
                overflow-x: hidden;
            }
            body {
                line-height: 1.5;
                font-family: Arial, sans-serif;
            }
        `}
    />
);

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const AlignFooter = styled.div`
    margin-top: auto;
`;

export default function Root({ children }: { children?: ReactNode }) {
    return (
        <>
            <GlobalStyles />
            <Container>
                <Navbar />
                {children || <Outlet />}
                <AlignFooter>
                    <Footer />
                </AlignFooter>
            </Container>
        </>
    );
}
