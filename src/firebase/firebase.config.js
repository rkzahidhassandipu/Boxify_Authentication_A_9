// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA75RB8nUKPBhxvNfh8hvKpe3GutRYWTyA",
  authDomain: "subscriptionbox-34c8e.firebaseapp.com",
  projectId: "subscriptionbox-34c8e",
  storageBucket: "subscriptionbox-34c8e.firebasestorage.app",
  messagingSenderId: "386445522890",
  appId: "1:386445522890:web:74383a6bafcd0347398133"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)