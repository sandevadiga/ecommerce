// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr-2sjcpOH52-LzY0VpqPq-9WAT6_Zans",
  authDomain: "ecommerce-aa80a.firebaseapp.com",
  projectId: "ecommerce-aa80a",
  storageBucket: "ecommerce-aa80a.appspot.com",
  messagingSenderId: "823529723971",
  appId: "1:823529723971:web:ff8bf9d51e5bf8fc9a5cf6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
