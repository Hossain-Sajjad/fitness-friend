// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDEXZHCBwdPDCt74O2x19o-KYmE2gUV9yQ",
    authDomain: "fitness-friend-2d891.firebaseapp.com",
    projectId: "fitness-friend-2d891",
    storageBucket: "fitness-friend-2d891.appspot.com",
    messagingSenderId: "376613679354",
    appId: "1:376613679354:web:41401d37c7bcad9b651943"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;