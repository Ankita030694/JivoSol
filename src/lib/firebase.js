// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZaCSXkIH6A9fga43_l6qjYMdTGnjzBgM",
  authDomain: "jivosol.firebaseapp.com",
  projectId: "jivosol",
  storageBucket: "jivosol.firebasestorage.app",
  messagingSenderId: "601359937030",
  appId: "1:601359937030:web:4b19ff79d3af90fde4dd87",
  measurementId: "G-ZPNWQ3L11E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const db = getFirestore(app);

export { app, db };