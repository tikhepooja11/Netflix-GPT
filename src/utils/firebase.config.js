// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4S7LAqgY8xtdxTt9PuRg6c3q5bGgEwqA",
  authDomain: "netflix-gpt-7d257.firebaseapp.com",
  projectId: "netflix-gpt-7d257",
  storageBucket: "netflix-gpt-7d257.appspot.com",
  messagingSenderId: "269753581279",
  appId: "1:269753581279:web:6dfc2e22d72c8332d5b36a",
  measurementId: "G-8ZB0H2L9XL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
