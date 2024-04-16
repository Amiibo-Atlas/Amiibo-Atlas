import { Outlet } from 'react-router-dom';
import { ReactNode } from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import styled from '@emotion/styled';

import Login from './Login';

import { useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const AlignFooter = styled.div`
    margin-top: auto;
`;
export default function Root({ children }: { children?: ReactNode }) {
    const [user, setUser] = useState({});
    return (
        <>
            <Container>
                <Navbar user={user} />
                {/* {Object.keys(user).length !== 0 ? null : <Login setUser={setUser} />} */}
                {children || <Outlet />}
                <AlignFooter>
                    <Footer />
                </AlignFooter>
            </Container>
        </>
    );
}
