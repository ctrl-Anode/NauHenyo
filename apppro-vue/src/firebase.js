// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoSnXquw0VCEshV6yuUweVoEvew8ulblI",
  authDomain: "nauhenyosystem.firebaseapp.com",
  projectId: "nauhenyosystem",
  storageBucket: "nauhenyosystem.firebasestorage.app",
  messagingSenderId: "954332793298",
  appId: "1:954332793298:web:180993f99bcf3f5446a00b",
  measurementId: "G-2W9ZC56VBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);