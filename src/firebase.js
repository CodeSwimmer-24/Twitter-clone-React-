import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVZOa6pv_IUuTKknXwODVqOFOJda5fLic",
  authDomain: "twitter-clone-b72e0.firebaseapp.com",
  projectId: "twitter-clone-b72e0",
  storageBucket: "twitter-clone-b72e0.appspot.com",
  messagingSenderId: "202998556460",
  appId: "1:202998556460:web:560ee701c27a923c3d2e89",
  measurementId: "G-H7J6HQCFNE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
