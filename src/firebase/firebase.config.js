// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACmdHtZJmYZOkxBjOVicMOZFHvQBH1DY0",
  authDomain: "coffee-shop-2dc8c.firebaseapp.com",
  projectId: "coffee-shop-2dc8c",
  storageBucket: "coffee-shop-2dc8c.appspot.com",
  messagingSenderId: "369253960224",
  appId: "1:369253960224:web:5efd95e8bc7680b5460a45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;