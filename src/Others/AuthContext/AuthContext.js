import React from 'react';
import { createContext } from 'react';
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import app from '../Firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const UserContext = createContext()
const auth = getAuth(app)

const AuthContext = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState()


    //user created
    const userCreated = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //update name and photo url
    const updateProfileInfo = (profile)=>{
        setLoading(true)
        updateProfile(auth.currentUser,profile)
    }

    //login with email&pass
    const siginWithPass = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout 
    const logedOut = ()=>{
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=>{
            unSubscribe()
        }
    },[])


    const authInfo = {
      user,
      setUser,
      loading,
      logedOut,
      userCreated,
      updateProfileInfo,
      siginWithPass,
    };
    return (
        <UserContext.Provider value={authInfo}>
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;