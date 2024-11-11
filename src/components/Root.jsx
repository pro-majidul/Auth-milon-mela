import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Root = () => {
    return (
        <div className='w-11/12 mx-auto my-2 py-1'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;