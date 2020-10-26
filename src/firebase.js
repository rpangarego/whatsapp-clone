import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9J1eY3-j2Hzh0-o2jxXtdI48GtsN9N-I",
  authDomain: "whatsapp-clone-9c85b.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-9c85b.firebaseio.com",
  projectId: "whatsapp-clone-9c85b",
  storageBucket: "whatsapp-clone-9c85b.appspot.com",
  messagingSenderId: "529953650317",
  appId: "1:529953650317:web:68dc229a6bb6e78c8554c4",
  measurementId: "G-54RQ1T33GN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
