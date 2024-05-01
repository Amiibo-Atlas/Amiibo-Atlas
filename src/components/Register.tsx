import { useState } from 'react';
import { doCreateUserWithEmailAndPassword } from '../features/auth/Auth';
import { useNavigate } from 'react-router-dom';
import {
    doc,
    onSnapshot,
    updateDoc,
    setDoc,
    deleteDoc,
    collection,
    serverTimestamp,
    getDocs,
    query,
    where,
    orderBy,
    limit,
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

import { firestore } from '../firebase/firebaseConfig';

function Register() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    const collectionRef = collection(firestore, 'users');

    const onSubmit = async (e) => {
        e.preventDefault();

        // Firestore user POST/ADD
        const newUser = {
            displayName: username,
            email: email,
            profile_picture: 'None',
            wishlist: [],
            id: uuidv4(),
            createdAt: serverTimestamp(),
            lastUpdate: serverTimestamp(),
        };

        try {
            const userRef = doc(collectionRef, newUser.id);
            await setDoc(userRef, newUser);
        } catch (error) {
            console.error(error);
        }

        // Firebase auth user creation
        if (!isRegistering) {
            setIsRegistering(true);
            await doCreateUserWithEmailAndPassword(email, password);
        }
        navigate('/');
    };

    return (
        <div>
            <h2>Signup</h2>
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
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Register;
