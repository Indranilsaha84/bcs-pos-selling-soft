  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
const firebaseConfig = {
  apiKey: "AIzaSyAJb_8coxLOYl3j6G33qif7yCx7CSrI9us",
  authDomain: "barodasell.firebaseapp.com",
  projectId: "barodasell",
  storageBucket: "barodasell.firebasestorage.app",
  messagingSenderId: "986562391972",
  appId: "1:986562391972:web:6803c0074ed4eebfd41b31",
  measurementId: "G-S5HDJXFHEY"
};
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export { app }
