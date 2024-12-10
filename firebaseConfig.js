// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmXGKkk7PesEsH8FGyHH59RYY1FM1O6Ag",
  authDomain: "navisights-51596.firebaseapp.com",
  projectId: "navisights-51596",
  storageBucket: "navisights-51596.firebasestorage.app",
  messagingSenderId: "1026475375338",
  appId: "1:1026475375338:web:d2ea9180166b9ca7913593",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
