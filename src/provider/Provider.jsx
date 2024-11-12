import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.init';
import { Result } from 'postcss';

export const AuthProvider = createContext(null)

const googleProvider = new GoogleAuthProvider()


const Provider = ({ children }) => {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true)
    const createUser = (email , password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const loginWithGoogle = ()=>{
        setLoading(true)
       return signInWithPopup(auth , googleProvider)
    }


    const loginUser = (email , password) =>{
        setLoading(true)
      return  signInWithEmailAndPassword(auth , email , password)
    }
    const name = 'md majidul islam';

    const userLogOut = () =>{
       return signOut(auth)
        
    }

    useEffect(()=>{

      const onObserve =  onAuthStateChanged(auth , currentUser=>{
        console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
            
        })
        return () =>{
            onObserve()
        }

    },[])
    

    const AuthInfo = {
        name,
        createUser,
        user,
        userLogOut,
        loginUser,
        loading,
        loginWithGoogle,
        
    }
    return (
        <AuthProvider.Provider value={AuthInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Provider;