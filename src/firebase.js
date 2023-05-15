
import { initializeApp } from "firebase/app";
import  {setUser } from "react";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDXMFCijSwJKx5hwbOd8z55XkmBYkmKgvs",
  authDomain: "wegiv-1c9b2.firebaseapp.com",
  projectId: "wegiv-1c9b2",
  storageBucket: "wegiv-1c9b2.appspot.com",
  messagingSenderId: "1089342959920",
  appId: "1:1089342959920:web:2c0e8505949284488798f5",
  measurementId: "G-NH1Z7WVQHD"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const auth1 = getAuth(app);
export const  auth2 = getAuth(app);


const provider = new GoogleAuthProvider()
export const SignInGoogle = () => {
    signInWithPopup(auth,provider).then((result) => {
        console.log(result);

    })
    .catch((error) =>{
        console.log(error);
    })
};