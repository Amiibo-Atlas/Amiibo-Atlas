import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function grabAuth() {
    // Listen for login authentication changes, such that user ID can be obtained.
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, log the user's ID token
            console.log('Logged in User...!!!!!:', user.uid);
            // Console log the auth token, manage it within user global state in redux.
            user.getIdToken()
                .then((token) => {
                    console.log('ID/Auth token...:', token);
                })
                .catch((error) => {
                    console.error('Error obtaining particular user...:', error);
                });
        } else {
            // User is signed out...
            console.log('User is no longer signed in...');
        }
    });
}
