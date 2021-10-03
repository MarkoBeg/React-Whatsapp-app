import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAxDfbuetg3jx6zEcIIoQq3ctK05uDZgFs",
  authDomain: "whatsapp-e1158.firebaseapp.com",
  projectId: "whatsapp-e1158",
  storageBucket: "whatsapp-e1158.appspot.com",
  messagingSenderId: "698226016851",
  appId: "1:698226016851:web:e6e944be31de9a7ada3ca6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const google = new firebase.auth.GoogleAuthProvider();

export { db, auth, google };
