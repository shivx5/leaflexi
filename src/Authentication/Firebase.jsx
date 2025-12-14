// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvbwzEozcf5yHkToXY7g1sh0_BbM-zdgE",
  authDomain: "leaflexi-ca79c.firebaseapp.com",
  projectId: "leaflexi-ca79c",
  storageBucket: "leaflexi-ca79c.firebasestorage.app",
  messagingSenderId: "711884351590",
  appId: "1:711884351590:web:df7fe62bd44b900db925a7",
  measurementId: "G-807LMSPTFQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
