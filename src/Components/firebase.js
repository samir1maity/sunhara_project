/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6FrqqvNacSCOHJYRAl_PLyoNEgaRPEd0",
  authDomain: "event-org-fee61.firebaseapp.com",
  projectId: "event-org-fee61",
  storageBucket: "event-org-fee61.appspot.com",
  messagingSenderId: "1053450958370",
  appId: "1:1053450958370:web:d1bcf13dad22b6c4507c7b",
  measurementId: "G-NYD8E87CRC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db = getFirestore(app)
export const storage = getStorage(app);
export default app;
// export { auth, db };