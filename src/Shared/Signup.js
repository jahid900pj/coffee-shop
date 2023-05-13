import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';


const Signup = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [signupError, setSignupError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')
    const { createUser, updateUser } = useContext(AuthContext)


    const handleSignup = data => {
        console.log(data)
        setSignupError('')
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user)
                // toast.success('user created successfully')
                const userInfo = {
                    displayName: data.name
                }

                updateUser(userInfo)
                    .then(() => {

                    })
                    .catch(err => { console.log(err) })
            })
            .catch(err => {
                setSignupError(err.message)

                console.log(err)
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 rounded-md shadow-2xl'>
                <h2 className='text-xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignup)}>
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input {...register("name", {
                        required: 'name is required',
                        maxLength: { value: 20, message: 'name length  max 20 character' }
                    })}
                        type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-600' role="alert">{errors.name?.message}</p>}

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        {...register("email", {
                            required: 'Email is required',

                        })}
                        type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}


                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password",
                        {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'password must be 6 characters' }

                        })} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                    {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}



                    {signupError && <p className='text-red-600' role="alert">{signupError}</p>}


                    <input className='btn btn-primary w-full max-w-xs mt-6' value='Sign Up' type="submit" />
                </form>
                <p>Already have an account ?<Link className='text-secondary' to='/login'>login</Link></p>


            </div>
        </div>
    );
};

export default Signup;