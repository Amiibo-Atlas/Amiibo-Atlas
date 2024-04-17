import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyA2K6kdE5ykTG_UILEATf7U0m5onaSIO2Q',
    authDomain: 'amiibo-atlas-b5484.firebaseapp.com',
    projectId: 'amiibo-atlas-b5484',
    storageBucket: 'amiibo-atlas-b5484.appspot.com',
    messagingSenderId: '863696608186',
    appId: '1:863696608186:web:abc0dc56ca4ed4cd375b83',
    measurementId: 'G-99K69DNER9',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
