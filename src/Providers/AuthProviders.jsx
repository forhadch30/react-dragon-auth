import PropTypes from "prop-types"
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase";

export const AuthConText = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading , setLoading]  = useState(true)
    const createUser = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
     const logOut = () => {
        setLoading(true)
        return signOut(auth)
     }




    useEffect(() =>{
     const unsubcribe = onAuthStateChanged(auth , currentUser =>{
            console.log("user in the auth state changed" , currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return() =>{
            unsubcribe()
        }
        
    },[])
     
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    return (
        <AuthConText.Provider value={authInfo}>
            {children}
        </AuthConText.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children:PropTypes.node
}