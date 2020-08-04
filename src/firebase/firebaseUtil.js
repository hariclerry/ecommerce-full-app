import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBIb3-qvNSmTj5-ZAqEmINuWc0G-tM-6z4",
  authDomain: "shop-db-157e8.firebaseapp.com",
  databaseURL: "https://shop-db-157e8.firebaseio.com",
  projectId: "shop-db-157e8",
  storageBucket: "shop-db-157e8.appspot.com",
  messagingSenderId: "138933735535",
  appId: "1:138933735535:web:b04a03285a669fe956fd9a",
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

