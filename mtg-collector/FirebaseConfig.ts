// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCjYQzZD0LgquupKC63gz2bMwOeKtzHK_c',
	authDomain: 'mtgcollector-fa457.firebaseapp.com',
	projectId: 'mtgcollector-fa457',
	storageBucket: 'mtgcollector-fa457.appspot.com',
	messagingSenderId: '1008916353680',
	appId: '1:1008916353680:web:618936878aec5d2c787e15',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
