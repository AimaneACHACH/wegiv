
import { initializeApp } from "firebase/app";
import  {setUser } from "react";
import { getAuth , GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase, ref, push, set } from 'firebase/database';
import { UserCredential } from "firebase/auth";


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
        const userCredential = result.user;
        const db = getDatabase();
      const dataRef = ref(db, 'User');
      const newDataRef = push(dataRef);
      const newUserId = newDataRef.key;

      const userData = {
        Id: newUserId,
        firstName: userCredential.additionalUserInfo.profile.given_name,
        lastName: userCredential.additionalUserInfo.profile.family_name,
        email: userCredential.additionalUserInfo.profile.email,
        // Other additional data you want to store
      };

      set(newDataRef, userData)
        .then(() => {
          console.log('Data added successfully to the database!');
          // Redirect or perform other actions after adding the data
        })
        .catch((error) => {
          console.log('Error adding data to the database:', error);
        });

    })
    .catch((error) =>{
        console.log(error);
    })
};