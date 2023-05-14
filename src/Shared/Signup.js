import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { toast } from 'react-hot-toast';


const Signup = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [signupError, setSignupError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const { createUser, updateUser } = useContext(AuthContext)

    const navigate = useNavigate()


    const menuBgStyle = {
        backgroundImage: `url('https://kaffen.bslthemes.com/wp-content/uploads/2022/04/category_bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }


    const handleSignup = data => {
        console.log(data)
        setSignupError('')
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                toast.success('user created successfully')
                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {
                        navigate('/')
                    })
                    .catch(err => { console.log(err) })
            })
            .catch(err => {
                setSignupError(err.message)

                console.log(err)
            })
    }


    const [buttonValue, setButtonValue] = useState('Sign Up');

    const handleClick = () => {
        setButtonValue('Loading...');
    };

    return (
        <div style={menuBgStyle}>
            <div className='h-[800px] flex justify-center items-center '>
                <div className='w-96 p-7 rounded-md shadow-2xl bg-primary border-solid border-2 border-secondary text-white'>
                    <h2 className='text-xl text-center'>Sign Up</h2>
                    <form onSubmit={handleSubmit(handleSignup)}>
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input {...register("name", {
                            required: 'name is required',
                            maxLength: { value: 20, message: 'name length  max 20 character' }
                        })}
                            type="text" placeholder="Name" className="input input-bordered w-full max-w-xs text-black" />
                        {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}

                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input
                            {...register("email", {
                                required: 'Email is required',

                            })}
                            type="email" placeholder="Email" className="input input-bordered w-full max-w-xs text-black" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}


                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input {...register("password",
                            {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'password must be 6 characters' }

                            })} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs text-black" />
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}



                        {signupError && <p className='text-red-600' role="alert">{signupError}</p>}


                        <input className='btn btn-secondary text-white w-full max-w-xs mt-6' value={buttonValue} type="submit" onClick={handleClick} />
                    </form>
                    <p>Already have an account ?<Link className='text-secondary' to='/login'>login</Link></p>


                </div>
            </div>
        </div>

    );
};

export default Signup;