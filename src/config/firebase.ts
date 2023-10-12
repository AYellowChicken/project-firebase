// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD56px2t8Cj3FDuVuB831LPHzJRtj1Pxuw",
  authDomain: "lifegems-bad.firebaseapp.com",
  projectId: "lifegems-bad",
  storageBucket: "lifegems-bad.appspot.com",
  messagingSenderId: "473134243299",
  appId: "1:473134243299:web:928204f8731fa6c4ac14d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // Will contain all the informations of the logged in user. Just like the token
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);