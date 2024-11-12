import React, { useContext } from 'react';
import { AuthProvider } from '../../provider/Provider';
import { Navigate } from 'react-router-dom';

const Private = ({ children }) => {
    // console.log(children);
    const { user, loading } = useContext(AuthProvider)
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if (user) {
        return children
    }
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default Private;