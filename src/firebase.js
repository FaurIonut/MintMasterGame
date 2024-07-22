import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Replace with your Firebase configuration
  apiKey: "AIzaSyAn5X-GitstIRdJnK6Zh12A4lb6ZC9wWPA",
  authDomain: "airdrop-6ddcd.firebaseapp.com",
  projectId: "airdrop-6ddcd",
  storageBucket: "airdrop-6ddcd.appspot.com",
  messagingSenderId: "509687867989",
  appId: "1:509687867989:web:75f41d28eba0b95f6fc2dc",
  measurementId: "G-BTSEE7X939"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
