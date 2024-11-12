import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/Firebase.init';
import { AuthProvider } from '../provider/Provider';

const Login = () => {
    const {loginUser} = useContext(AuthProvider)
    const handelLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email , password)
        .then(result => {
            console.log(result)
        })
        .catch(error =>{
            console.log(error.message)
        })
        console.log('login added ' , email , password);
    }
    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-232px)]">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Login now!</h1>
                    
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handelLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='mx-4 my-2 text-lg'>You are new this website  Please <Link to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;