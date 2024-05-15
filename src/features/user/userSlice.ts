import { createSlice } from '@reduxjs/toolkit';
import { signInWithGoogle } from '../auth/Auth';
import { getUser, postUser } from './userAPI';
import { User } from '../../types/User';

const initialState = {
    userId: ""
}

export const googleSignInAndUserSetup = async (): Promise<string | undefined> => {
    try {
        // Check if the user data is already in the database
        const result = await signInWithGoogle();
        // console.log(result);
        const login_user = result.user;
        const user = await getUser(login_user.uid);

        // If the user data is not in the database, add it
        if(!user) {
            const newUser: User = {
                displayName: login_user.displayName ?? "",
                email: login_user.email ?? "",
                profile_picture: login_user.photoURL ?? "",
                wishlist: login_user.wishlist ?? []
            }
            await postUser({
                uid: login_user.uid,
                user: newUser
            })
        }
        return login_user.uid;
    } catch (error) {
        console.log('Login failed: ', error);
    }
}

export const userSlice = createSlice({
    name: "userId",
    initialState,
    reducers: {
        login: (state, action) => {
            state.userId = action.payload;
        },
        logout: (state) => {
            state.userId = "";
        }
    }
})

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
