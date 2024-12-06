import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, sendEmailVerification,
  signOut,
  GoogleAuthProvider,
  signInWithPopup}
 from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"

 import { getFirestore,collection, addDoc,getDocs,Timestamp,query,orderBy,limit,doc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzNlJ5gbsCx5alRP9FUP-IJLK3nFN_C-E",
  authDomain: "register-app-65c06.firebaseapp.com",
  projectId: "register-app-65c06",
  storageBucket: "register-app-65c06.firebasestorage.app",
  messagingSenderId: "632092323605",
  appId: "1:632092323605:web:466a42632be18fa962c31c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
  const db = getFirestore(app);


  
  export {auth,app,createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, sendEmailVerification,
    signOut,
    GoogleAuthProvider,
    provider,
    signInWithPopup,db,
    getFirestore,collection, addDoc,getDocs,Timestamp,query,orderBy,limit,doc, deleteDoc
    };