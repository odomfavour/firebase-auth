// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5MbBOH9P6_kqDfS49tqLwxYRWL-igv2U",
  authDomain: "signupapp-5f516.firebaseapp.com",
  projectId: "signupapp-5f516",
  storageBucket: "signupapp-5f516.appspot.com",
  messagingSenderId: "615828508540",
  appId: "1:615828508540:web:4f6c6f7091664b53849ef9"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;