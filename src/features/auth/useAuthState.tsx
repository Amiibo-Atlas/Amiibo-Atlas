import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { auth } from './Auth';
import { login, logout } from '../user/userSlice';

// Custom hook that sets up the auth state listener that's called whenever the auth state changes
// onAuthStateChanged() will returns a User object if the user is logged in, otherwise it will return null
const useAuthState = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((loginUser) => {
            if(loginUser) {
                dispatch(login(loginUser.uid));
            }
            else {
                dispatch(logout());
            }
        })
        // cleanup function
        return () => unsubscribe();
    }, [dispatch]);

    return;
}

export default useAuthState;