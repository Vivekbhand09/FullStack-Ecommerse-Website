
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "ecommerse-app-c2e7a.firebaseapp.com",
  projectId: "ecommerse-app-c2e7a",
  storageBucket: "ecommerse-app-c2e7a.appspot.com",
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;