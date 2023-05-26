// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6g7VC7SfQL-_AlQRjKgYikZnM_UfBPgc",
  authDomain: "movie-review-a4171.firebaseapp.com",
  projectId: "movie-review-a4171",
  storageBucket: "movie-review-a4171.appspot.com",
  messagingSenderId: "304556195619",
  appId: "1:304556195619:web:ef71692bbb0e18cb6d5696"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 