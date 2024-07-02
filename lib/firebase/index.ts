// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG-avQ5iBnEGktAYHcrVgTgRlMyjM-h84",
  authDomain: "clone-3b3ef.firebaseapp.com",
  projectId: "clone-3b3ef",
  storageBucket: "clone-3b3ef.appspot.com",
  messagingSenderId: "880631803493",
  appId: "1:880631803493:web:f6eb7a15da131ee716608c",
  measurementId: "G-PTK4KM4SGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app)