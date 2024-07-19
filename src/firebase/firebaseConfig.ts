import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAbEveKP8uFbHk4pFIgjJtFReSV0wDElsw",
  authDomain: "tapttoo-7b2ad.firebaseapp.com",
  projectId: "tapttoo-7b2ad",
  storageBucket: "tapttoo-7b2ad.appspot.com",
  messagingSenderId: "155539663326",
  appId: "1:155539663326:web:3500f9c8561841d269d54f",
  measurementId: "G-PHSPLXVRGV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);

export { app, auth, firestore, analytics };
