// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-hFEDT1DnkZILc5ow4L407_NgfSqQ-Lg",
  authDomain: "vite-contact-ef569.firebaseapp.com",
  projectId: "vite-contact-ef569",
  storageBucket: "vite-contact-ef569.appspot.com",
  messagingSenderId: "960590407711",
  appId: "1:960590407711:web:e36b881c4081280ec08d2a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
