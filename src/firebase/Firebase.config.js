// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_AapiKey,
  authDomain: import.meta.env.VITE_AauthDomain,
  projectId: import.meta.env.VITE_AprojectId,
  storageBucket: import.meta.env.VITE_AstorageBucket,
  messagingSenderId: import.meta.env.VITE_AmessagingSenderId,
  appId: import.meta.env.VITE_AappId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app