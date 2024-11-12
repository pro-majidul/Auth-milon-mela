import React, { useContext } from 'react';
import { AuthProvider } from '../provider/Provider';

const Home = () => {
    const {name} = useContext(AuthProvider)
    return (
        <div>
            <h3>this is {name}</h3>
        </div>
    );
};

export default Home;