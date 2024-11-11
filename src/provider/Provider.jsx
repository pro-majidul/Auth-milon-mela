import React, { createContext } from 'react';

export const AuthProvider = createContext(null)


const Provider = ({ children }) => {
    const AuthInfo = {
        name: ' md Majidul islam'
    }
    return (
        <AuthProvider.Provider value={AuthInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Provider;