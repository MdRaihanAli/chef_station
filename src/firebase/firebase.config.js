import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDJJFYYdCtButCSqTGetCpdwIFCcuzpycs",
  authDomain: "chef-recipe-hunter-a19ba.firebaseapp.com",
  projectId: "chef-recipe-hunter-a19ba",
  storageBucket: "chef-recipe-hunter-a19ba.appspot.com",
  messagingSenderId: "190846281967",
  appId: "1:190846281967:web:b77b7c0db86598d700931a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;