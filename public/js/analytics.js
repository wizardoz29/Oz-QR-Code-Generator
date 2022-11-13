// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBisefm8EfjBPyWcU_tpRlfNcwvESdogQY",
  authDomain: "oz-qrcode-generator.firebaseapp.com",
  projectId: "oz-qrcode-generator",
  storageBucket: "oz-qrcode-generator.appspot.com",
  messagingSenderId: "1072790908149",
  appId: "1:1072790908149:web:a321e2f9459f24a0ade9bc",
  measurementId: "G-VW3MWG8YCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);