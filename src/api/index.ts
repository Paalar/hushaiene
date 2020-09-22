import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: 'hushaien.firebaseapp.com',
    databaseURL: 'https://hushaien.firebaseio.com',
    projectId: 'hushaien',
    storageBucket: 'hushaien.appspot.com',
    messagingSenderId: FIREBASE_APP_ID,
    appId: FIREBASE_SENDER_ID,
    measurementId: 'G-SNJ34Y8G0W',
};

try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    // we skip the "already exists" message which is
    // not an actual error when we're hot-reloading
    if (!/already exists/.test(err.message))
        console.error('Firebase initialization error', err.stack);
}

const auth = firebase.auth();

export default auth;
