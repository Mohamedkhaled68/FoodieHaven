import { initializeApp } from "firebase/app";
import { getAuth, getFirestore } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyALt_Iars0uZM3GOiSJqSDuGVb76w5Sp1w",
    authDomain: "foodiehaven-c9915.firebaseapp.com",
    projectId: "foodiehaven-c9915",
    storageBucket: "foodiehaven-c9915.appspot.com",
    messagingSenderId: "910998161305",
    appId: "1:910998161305:web:280f43f9e28ec8e9d13508",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
