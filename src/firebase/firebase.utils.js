import firebase from 'firebase/app'; // Base import
import 'firebase/firestore'; // Because the base import happend, we can do this (and the next) statement
import 'firebase/auth'; // This will lead to the use of firebase.auth (base import.specific util)

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: 'select_account'
  });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;