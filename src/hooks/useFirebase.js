import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useEffect, useState } from "react";
import initializeAuthentication from './../Firebase/firebase.init';
initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const logOut = () => {
        signOut(auth).then(result => { }).then(error => { })
    }
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            setUser(user)
        })
    }, [auth])

    return { user, signInUsingGoogle, logOut }
}
export default useFirebase;