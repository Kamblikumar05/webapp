// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDw1MwKeGKx8zwOEyU0ucnrHD9ECWW-yhs",
  authDomain: "netflixgpt-df3b5.firebaseapp.com",
  projectId: "netflixgpt-df3b5",
  storageBucket: "netflixgpt-df3b5.appspot.com",
  messagingSenderId: "688578663445",
  appId: "1:688578663445:web:337e8453c1c81141ecaa1c",
  measurementId: "G-F2PCKQYXKD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
