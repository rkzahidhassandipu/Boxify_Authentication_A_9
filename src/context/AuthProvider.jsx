import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()
import { auth} from "./../firebase/firebase.config"
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
      };
    const logIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () => {
      setLoading(true);
      return signOut(auth)
    }

    const updateUserInfo =(updatedData) => {
      return updateProfile(auth.currentUser, updatedData)
    }

    useEffect(() => {
     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current User inside useEffect on auth state change", currentUser)
      setUser(currentUser);
      setLoading(false)
     })
     return () => {
      unSubscribe();
     }
    }, [])

    const resetPassword =(email) => {
      return sendPasswordResetEmail(auth, email)
    }
    
    const authData = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        googleSignIn,
        signOutUser,
        logIn,
        updateUserInfo,
        resetPassword
      };
      
   return (
  <AuthContext.Provider value={authData}>
    {children}
  </AuthContext.Provider>
);


}

export default AuthProvider
