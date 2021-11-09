// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAncZKe7CbGSA7Lxn_mCgBTtQxgs-t3EkY",
  authDomain: "uber-next-clone-58256.firebaseapp.com",
  projectId: "uber-next-clone-58256",
  storageBucket: "uber-next-clone-58256.appspot.com",
  messagingSenderId: "636955893171",
  appId: "1:636955893171:web:fb6169a276dcfeeda4bfc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };
