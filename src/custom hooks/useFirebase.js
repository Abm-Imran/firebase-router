import { useEffect, useState } from "react"
import app from "../firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(user.displayName);
            })
            .catch(error => {
                console.log(error);
            })
        console.log('Logged In Successfully');

    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log('signed Out successfully');
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])

    return {
        user,
        handleSignOut,
        handleSignInWithGoogle
    }
}

export default useFirebase;