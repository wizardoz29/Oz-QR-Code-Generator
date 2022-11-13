// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkA4rLlH6tdbkPd8wdkSwhKDBv4HFsnGU",
  authDomain: "oz-qr-code-generator.firebaseapp.com",
  projectId: "oz-qr-code-generator",
  storageBucket: "oz-qr-code-generator.appspot.com",
  messagingSenderId: "17861028025",
  appId: "1:17861028025:web:782ed9b1429e5174e4d368",
  measurementId: "G-RG31DH6JCM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);