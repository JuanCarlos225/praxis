import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDOuRR8d31PDnw3igLl4yg6_56aUkREhs",
  authDomain: "shadowbyte-a47a6.firebaseapp.com",
  projectId: "https://shadowbyte-a47a6-default-rtdb.firebaseio.com",
  storageBucket: "shadowbyte-a47a6.firebasestorage.app",
  messagingSenderId: "856497996071",
  appId: "1:856497996071:web:960e34e2a80d1b1a24a902"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

export { db };