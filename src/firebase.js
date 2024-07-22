// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAn5X-GitstIRdJnK6Zh12A4lb6ZC9wWPA",
  authDomain: "airdrop-6ddcd.firebaseapp.com",
  databaseURL: "https://airdrop-6ddcd-default-rtdb.firebaseio.com",
  projectId: "airdrop-6ddcd",
  storageBucket: "airdrop-6ddcd.appspot.com",
  messagingSenderId: "509687867989",
  appId: "1:509687867989:web:75f41d28eba0b95f6fc2dc",
  measurementId: "G-BTSEE7X939"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log("Firebase initialized:", app);
console.log("Firestore initialized:", db);

export { db };
