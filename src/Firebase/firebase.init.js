import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';

const initializeAuthentication = () => {
    initializeApp(firebaseConfig)
}
export default initializeAuthentication;

/* 
Step for authentication 
-----------------------
1. Create a new project in firebase
2. Create a new firebase.config.js file
3. Copy the firebase.config.js file to the src folder
4. Create a new firebase.js file
5. initializeApp(firebaseConfig)
6. enable auth
*/