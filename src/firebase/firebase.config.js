// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyBXAF6wgRU7u1R9NBM1IBnDrSR2wtsU_30",
    authDomain: "car-world-77c5e.firebaseapp.com",
    projectId: "car-world-77c5e",
    storageBucket: "car-world-77c5e.appspot.com",
    messagingSenderId: "605070304143",
    appId: "1:605070304143:web:4aa7acf131d209d83d61fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;