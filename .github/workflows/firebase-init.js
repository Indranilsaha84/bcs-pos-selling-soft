
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAJb_8coxLOYl3j6G33qif7yCx7CSrI9us",
    authDomain: "barodasell.firebaseapp.com",
    projectId: "barodasell",
    storageBucket: "barodasell.firebasestorage.app",
    messagingSenderId: "986562391972",
    appId: "1:986562391972:web:6803c0074ed4eebfd41b31",
    measurementId: "G-S5HDJXFHEY"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
