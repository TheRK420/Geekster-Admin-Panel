// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
export const database = getAuth(app)