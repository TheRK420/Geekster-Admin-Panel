import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBrUJSk0d052OdxXGVIB4wp_DEsbkRbusI",
  authDomain: "geekster-admin.firebaseapp.com",
  projectId: "geekster-admin",
  storageBucket: "geekster-admin.appspot.com",
  messagingSenderId: "539268896075",
  appId: "1:539268896075:web:136c580ec697d36bde44ce",
  measurementId: "G-Z69CZYXZ64"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const database = getAuth(app);
export const storage = getStorage(app);
