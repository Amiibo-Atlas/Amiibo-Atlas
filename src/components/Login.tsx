// const googleOAuthID = import.meta.env.VITE_GOOGLEOAUTH_CLIENT_ID;

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

function Login({ setUser }) {
    return (
        <GoogleLogin
            onSuccess={(credentialResponse) => {
                console.log('Encrypted: ', credentialResponse);
                const decodedUserObj = jwtDecode(credentialResponse.credential);
                console.log('Decoded: ', decodedUserObj);
                setUser(decodedUserObj);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
        />
    );
}
export default Login;
