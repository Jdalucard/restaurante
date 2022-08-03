// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuREyzycqmQNG8sGskrLxr244B2Y1qVm8",
  authDomain: "restaurante-app-d5cca.firebaseapp.com",
  projectId: "restaurante-app-d5cca",
  storageBucket: "restaurante-app-d5cca.appspot.com",
  messagingSenderId: "65033332188",
  appId: "1:65033332188:web:9a3d3619d148b82c711b19"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);


