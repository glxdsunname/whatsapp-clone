import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDhTEgKYecjhJI91JYhPTrbOzFojunATv0",
  authDomain: "whatsapp-1d4c5.firebaseapp.com",
  projectId: "whatsapp-1d4c5",
  storageBucket: "whatsapp-1d4c5.appspot.com",
  messagingSenderId: "455947915140",
  appId: "1:455947915140:web:92f99fb3ebfc85594317d1",
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
