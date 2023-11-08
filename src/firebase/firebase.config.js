// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCHki1vm5buXRWkh1Viw0IjguXLPMXUUjE",
//   authDomain: "foodie-pal-7e474.firebaseapp.com",
//   projectId: "foodie-pal-7e474",
//   storageBucket: "foodie-pal-7e474.appspot.com",
//   messagingSenderId: "319130736129",
//   appId: "1:319130736129:web:aad0641a911b606a8dd200",
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
