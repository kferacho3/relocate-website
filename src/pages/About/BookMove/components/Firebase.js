 // Import the functions you need from the SDKs you need
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "firebase/firestore";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyD3LB_6SSTWGBSQypjvFq3u4FQszre5tR4",
    authDomain: "covidform-4a1f1.firebaseapp.com",
    databaseURL: "https://covidform-4a1f1-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "covidform-4a1f1",
    storageBucket: "covidform-4a1f1.appspot.com",
    messagingSenderId: "823663655341",
    appId: "1:823663655341:web:1a5aac2153a954e6888924",
    measurementId: "G-H4YRR8LNJW"
 };
 // Initialize Firebase
 
 const app = initializeApp(firebaseConfig);




 export const db = getFirestore(app);