// src/config/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBn60iQ4NmPmAE5u1q6NL0biXl-n-qNHRc",
    authDomain: "metalcraft-7a7c3.firebaseapp.com",
    projectId: "metalcraft-7a7c3",
    storageBucket: "metalcraft-7a7c3.firebasestorage.app",
    messagingSenderId: "243223660025",
    appId: "1:243223660025:web:bee75a9bd30b417288e928",
    measurementId: "G-0LD9G6G19N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize services
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default app;