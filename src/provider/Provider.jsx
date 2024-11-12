import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase.init';
import { Result } from 'postcss';

export const AuthProvider = createContext(null)


const Provider = ({ children }) => {

    const [user , setUser] = useState(null)
    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const loginUser = (email , password) =>{
      return  signInWithEmailAndPassword(auth , email , password)
    }
    const name = 'md majidul islam';

    const userLogOut = () =>{
        signOut(auth)
        .then(Result => {
            setUser(Result);
        })
        .catch(error => console.log(error.message))
    }

    useEffect(()=>{

      const onObserve =  onAuthStateChanged(auth , currentUser=>{
        console.log(currentUser);
            setUser(currentUser)
            
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
        loginUser
    }
    return (
        <AuthProvider.Provider value={AuthInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Provider;