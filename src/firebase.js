// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAHO8AmdSVCI-j9UBV9OTWflS0_ADnCMU",
  authDomain: "what-s-app-cone.firebaseapp.com",
  projectId: "what-s-app-cone",
  storageBucket: "what-s-app-cone.appspot.com",
  messagingSenderId: "157851261888",
  appId: "1:157851261888:web:393c4932140891ac498625",
  measurementId: "G-12CJPRF9VM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
