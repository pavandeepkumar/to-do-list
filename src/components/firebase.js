// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPLiXAcAoLiJHGVJxz8x7KThYVAz_5_gQ",
  authDomain: "to-do-list-app-b0253.firebaseapp.com",
  projectId: "to-do-list-app-b0253",
  storageBucket: "to-do-list-app-b0253.appspot.com",
  messagingSenderId: "376834920879",
  appId: "1:376834920879:web:dddb2a961f88500c93df5a",
  measurementId: "G-GEDJ1M1EK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);