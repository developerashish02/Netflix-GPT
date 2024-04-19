// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS6xHt03ak2uJE3ERkAsxH_xRj8glOmRY",
  authDomain: "netflix-gpt-83e52.firebaseapp.com",
  projectId: "netflix-gpt-83e52",
  storageBucket: "netflix-gpt-83e52.appspot.com",
  messagingSenderId: "227983670400",
  appId: "1:227983670400:web:ce1d866eed205eb604ba65",
  measurementId: "G-LMBNY67KVZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
