// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxnskqlVRdlxnHQFR7EcJNYWb9XltaiME",
  authDomain: "hotelbookingapp-227ff.firebaseapp.com",
  projectId: "hotelbookingapp-227ff",
  storageBucket: "hotelbookingapp-227ff.firebasestorage.app",
  messagingSenderId: "729380660389",
  appId: "1:729380660389:web:308be533adffda382b594c",
  measurementId: "G-V3GK7F3EVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);