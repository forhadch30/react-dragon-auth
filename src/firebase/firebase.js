// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp_AXv-i817MhxD9HCfzj5k0bvEH_5pHs",
  authDomain: "simming-react-dragon.firebaseapp.com",
  projectId: "simming-react-dragon",
  storageBucket: "simming-react-dragon.appspot.com",
  messagingSenderId: "269180531704",
  appId: "1:269180531704:web:aa708f2d91774bf0fbdc0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;