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
export default function Root() {
    const [user, setUser] = useState({});
    return (
        <>
            <Container>
                <Navbar user={user} />
                <h1>Ignore this layout. Just setting basic things up. Testing husky...</h1>
                {Object.keys(user).length !== 0 ? null : <Login setUser={setUser} />}
                <AlignFooter>
                    <Footer />
                </AlignFooter>
            </Container>
        </>
    );
}
