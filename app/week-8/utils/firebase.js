// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3bR0HYyHRJRRW29d1dgwYqL1pOlEUNN8",
  authDomain: "cprg306-assignments-2621c.firebaseapp.com",
  projectId: "cprg306-assignments-2621c",
  storageBucket: "cprg306-assignments-2621c.appspot.com",
  messagingSenderId: "478494566611",
  appId: "1:478494566611:web:59e61e6633c2cb650fcc26",
  measurementId: "G-79W8D77PKX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);