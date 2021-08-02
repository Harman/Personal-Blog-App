import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCbDQUUQxGWozf84aTb8djvJv03BqMz9vE",
    authDomain: "personal-blog-950a5.firebaseapp.com",
    projectId: "personal-blog-950a5",
    storageBucket: "personal-blog-950a5.appspot.com",
    messagingSenderId: "773878057382",
    appId: "1:773878057382:web:af4ce5e9465b022ab5a767"
  };

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const auth = firebase.auth();

let provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
