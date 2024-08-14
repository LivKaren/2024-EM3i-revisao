// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBH_O7e1Ml_V1XDRGkaeCDsTG9g3DvTCS0",
  authDomain: "info-aad90.firebaseapp.com",
  projectId: "info-aad90",
  storageBucket: "info-aad90.appspot.com",
  messagingSenderId: "903312624720",
  appId: "1:903312624720:web:f71e7d2130becddd211555",
  measurementId: "G-Q2NFP0CYM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);