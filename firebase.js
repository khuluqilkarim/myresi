import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCI3dNsikyIJz6L-Y-GZfcv7u3lxWX4arY",
  authDomain: "infra-window-407317.firebaseapp.com",
  projectId: "infra-window-407317",
  storageBucket: "infra-window-407317.appspot.com",
  messagingSenderId: "719433980136",
  appId: "1:719433980136:web:89f28584296f6e5de5115d",
  measurementId: "G-Z5L9L3QW9S",
};

let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
