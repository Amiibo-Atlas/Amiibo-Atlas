import { useState, useEffect } from 'react';
import { firestore } from '../firebase/firebaseConfig';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

import { doSignInUserWithEmailAndPassword } from '../features/auth/Auth';

import { setUser } from '../redux/userSlice';

// import grabAuth from '../functions/getAuthToken';
// console.log('PLEASE CHECK IF WORKING....: ', grabAuth);

import styled from '@emotion/styled';
import { useAppDispatch } from '../redux/hooks';
const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-grow: 1;
`;

import { useAppSelector } from '../redux/hooks';
import Cookies from 'universal-cookie';

function Login() {
    // Determine status of login from the redux store...
    const statusLogin = useAppSelector((state) => state.setUser.loginStatus);
    // console.log('CHECK MEEEEE....: ', statusLogin);

    const navigate = useNavigate();
    useEffect(() => {
        // If user is logged in, navigate back to homepage.
        if (statusLogin) {
            navigate('/profile'); // Redirect to the dashboard after login}
        }
    }, [statusLogin]);

    const cookies = new Cookies(null, { path: '/' });

    const user = useAppSelector((state) => state.setUser);
    // console.log('Cookies test...: ', user.uidToken);

    // Store user data in cookies for one day, assuming that user exists.
    if (user) {
        const setDayCookies = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
        cookies.set('userData', user.uidToken, { maxAge: setDayCookies });
    }

    const dispatch = useAppDispatch();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            await doSignInUserWithEmailAndPassword(email, password);

            const q = query(collection(firestore, 'users'), where('displayName', '==', username));

            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // console.log(doc.id, ' => ', doc.data());
                const userData = doc.data();
                // console.log('HELLo? !!!!! : ', userData);
                dispatch(
                    setUser({
                        email: userData.email,
                        username: userData.displayName,
                        wishlist: userData.wishlist,
                        loginStatus: true,
                        uidToken: userData.id,
                    })
                );
            });
        }
    };

    return (
        <LoginContainer>
            <div>
                <h2>Login</h2>
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            required
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </LoginContainer>
    );
}

export default Login;
