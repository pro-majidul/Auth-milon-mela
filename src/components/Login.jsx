import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../provider/Provider';

const Login = () => {
    const { loginUser,loginWithGoogle } = useContext(AuthProvider)
    const navigate = useNavigate()
    const handelLoginWithGoogle = () =>{
        loginWithGoogle()
        .then(result =>{
            console.log(result);
            navigate('/')
        })
        .catch(error=>{
            console.log(error.message);
        })
    }
    const handelLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
            .then(result => {
                console.log(result)
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
        console.log('login added ', email, password);
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
                    <div className="flex items-center justify-center">
                        <button onClick={handelLoginWithGoogle} className="btn btn-primary">Login in google</button>
                    </div>
                    <p className='mx-4 my-2 text-lg'>You are new this website  Please <Link to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;