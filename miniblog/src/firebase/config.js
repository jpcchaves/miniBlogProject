import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "miniblog-41d4d.firebaseapp.com",
  projectId: "miniblog-41d4d",
  storageBucket: "miniblog-41d4d.appspot.com",
  messagingSenderId: "127366670099",
  appId: "1:127366670099:web:a347d070f21e2d6ddfdce6",
};

const app = initializeApp(firebaseConfig);

// Getting the firestore
const db = getFirestore(app);

// Exporting
export { db };
