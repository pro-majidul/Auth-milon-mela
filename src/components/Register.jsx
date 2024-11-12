import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../provider/Provider';

const Register = () => {
    const {createUser} = useContext(AuthProvider);
    const navigate = useNavigate()
    const handelRegister = e => {
        e.preventDefault();
        const name = e.target.name.value ;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name , email , password);

        createUser(email , password)
        .then(result => {
            e.target.reset();
            navigate('/')

        })
        .catch(error => console.log('error' , error.message))

    }

    return (
        <div className="hero bg-base-200 min-h-[calc(100vh-232px)]">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Register now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handelRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="your name" className="input input-bordered" required />
                        </div>
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className='mx-4 my-2 text-lg'>Already have an account . please<Link to='/login'> Login </Link></p>
                   
                </div>
            </div>
        </div>
    );
};

export default Register;