import firebase from "firebase";
import "firebase/firebase-auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo9TmELGX89LN8BqdsQlobkqtb2bpxr3E",
  authDomain: "shopping-website-e7032.firebaseapp.com",
  databaseURL: "https://shopping-website-e7032.firebaseio.com",
  projectId: "shopping-website-e7032",
  storageBucket: "shopping-website-e7032.appspot.com",
  messagingSenderId: "1054451581969",
  appId: "1:1054451581969:web:64153ae40ee6802fdf9db0",
  measurementId: "G-9494DTV151"
};
firebase.initializeApp(firebaseConfig);
export default firebase;
