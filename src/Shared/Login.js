import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../Context/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import SpinningBtn from './SpinningBtn';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loginError, setLoginError] = useState('')
    const { login } = useContext(AuthContext)
    const [loginUserEmail, setLoginUserEmail] = useState('')

    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/"



    const handleLogin = data => {
        console.log(data)
        setLoginError('')
        login(data.email, data.password)
            .then((result) => {
                const user = result.user;
                // console.log(user)
                setLoginUserEmail(data.email)
                toast.success('Login successfully')
                navigate(from, { replace: true });

            })
            .catch(err => {
                console.log(err.message)
                setLoginError(err.message)

            })
    }
    const menuBgStyle = {
        backgroundImage: `url('https://kaffen.bslthemes.com/wp-content/uploads/2022/04/category_bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    const [buttonValue, setButtonValue] = useState('Login');

    const handleClick = () => {
        setButtonValue('Loading...');
    };


    return (
        <div style={menuBgStyle}>
            <div className='h-[800px] flex justify-center items-center '>
                <div className='w-96 p-7 rounded-md shadow-2xl bg-primary border-solid border-2 border-secondary text-white'>
                    <h2 className='text-xl text-center'>Login</h2>
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs text-black"{...register("email", { required: "Email Address is required" })} />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}

                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered w-full text-black max-w-xs"{...register("password",
                            {
                                required: "Password Address is required",
                                minLength: { value: 6, message: 'password must be 6 characters' }
                            })} />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text text-white">Forget password </span>
                        </label>
                        {loginError && <p className='text-red-600' role="alert">{loginError}</p>}
                        <input className='btn btn-secondary text-white w-full max-w-xs mt-6' value={buttonValue} type="submit" onClick={handleClick} />

                    </form>
                    <p>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create new account</Link></p>


                </div>
            </div>
        </div>

    );
};

export default Login;