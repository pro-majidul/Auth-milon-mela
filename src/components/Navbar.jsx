import React, { useContext } from 'react';
import { NavLink , Link } from 'react-router-dom';
import { AuthProvider } from '../provider/Provider';

const Navbar = () => {

    const {user , userLogOut}= useContext(AuthProvider)

    const handelLogOut = ()=>{
        userLogOut()
    }

 const Link = <>
    <li> <NavLink to='/'>Home</NavLink></li>
    <li> <NavLink to='/login'>Login</NavLink></li>
    <li> <NavLink to='/register'>Register</NavLink></li>
 </>
return (
    <div className="navbar bg-base-100">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                   {Link}
                </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-10 px-1">
                {Link}
            </ul>
        </div>
        <div className="navbar-end">
            {
                user ? <>
                <a className="btn">{user?.email}</a> 
                <p onClick={handelLogOut} className='btn'>Sign Out</p>
                </> : <NavLink to='/login'>Log in</NavLink>
            }
            
        </div>
    </div>
);
};

export default Navbar;