// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { signInWithPopup, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUUuOrljFuN1tckzxnm-pRrqQ_upyXkrc",
  authDomain: "checked-97559.firebaseapp.com",
  projectId: "checked-97559",
  storageBucket: "checked-97559.appspot.com",
  messagingSenderId: "545554443786",
  appId: "1:545554443786:web:8fe3ba80053900fb64b9f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth

function signInWithGoogle() {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }

export {
    app,
    signInWithGoogle
}