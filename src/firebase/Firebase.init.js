// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB38hhsdLhfhUI9r9FaGM6dRlJ6J-Rbu4Y",
    authDomain: "auth-milon-mela-68b37.firebaseapp.com",
    projectId: "auth-milon-mela-68b37",
    storageBucket: "auth-milon-mela-68b37.firebasestorage.app",
    messagingSenderId: "452139929457",
    appId: "1:452139929457:web:5384637d2fd6909e58f0d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);