// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_XGOEPE48cGuspC6wAmyTgpPqEMlIgPg",
  authDomain: "give-ummah.firebaseapp.com",
  projectId: "give-ummah",
  storageBucket: "give-ummah.appspot.com",
  messagingSenderId: "832568068596",
  appId: "1:832568068596:web:a99bb1d5169a3b93c411a1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
