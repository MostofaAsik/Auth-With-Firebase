// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDz4eTaPz9EXgve7uyGDfz2gNhgaacd1kQ",
    authDomain: "firebas-auth-70396.firebaseapp.com",
    projectId: "firebas-auth-70396",
    storageBucket: "firebas-auth-70396.appspot.com",
    messagingSenderId: "696542275753",
    appId: "1:696542275753:web:b32bfd16749bc3e69461b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);