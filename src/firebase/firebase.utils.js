import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD-GLuBQrS4C1oBr65l4yqLbo08R-Tm6dA",
  authDomain: "crwn-database-a6a1e.firebaseapp.com",
  databaseURL: "https://crwn-database-a6a1e.firebaseio.com",
  projectId: "crwn-database-a6a1e",
  storageBucket: "crwn-database-a6a1e.appspot.com",
  messagingSenderId: "181099740834",
  appId: "1:181099740834:web:aef30f8077d3d6c2a121fb",
  measurementId: "G-2ZXHXKLQXQ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
