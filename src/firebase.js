
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase, ref, push, set } from 'firebase/database';


const firebaseConfig = {
  apiKey: "xxxxxxxxxx",
  authDomain: "xxxxxxx",
  projectId: "xxxxxxxxxx",
  storageBucket: "xxxxxxxxxxxx",
  messagingSenderId: "xxxxxxxxxx",
  appId: "xxxxxxxxxxxxxxxxxxxxxxx",
  measurementId: "xxxxxxxxxxxxxxx"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


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
