import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';
import { auth } from '../firebase/Firebase.init';

export const AuthProvider = createContext(null)


const Provider = ({ children }) => {

    const createUser = (email , password) =>{
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const name = 'md majidul islam'
    const AuthInfo = {
        name,
        createUser,
    }
    return (
        <AuthProvider.Provider value={AuthInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Provider;