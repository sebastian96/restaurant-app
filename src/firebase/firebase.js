import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAGlZ-QllLDaZv8NH6Rk7ZTgQis5L6dtO4",
    authDomain: "restaurant-proyect-aad08.firebaseapp.com",
    databaseURL: "https://restaurant-proyect-aad08.firebaseio.com",
    projectId: "restaurant-proyect-aad08",
    storageBucket: "restaurant-proyect-aad08.appspot.com",
    messagingSenderId: "238770579429",
    appId: "1:238770579429:web:1d94deee5f6e038045310c"
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();
export const auth = fb.auth();