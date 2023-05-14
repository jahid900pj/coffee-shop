import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    // console.log(user)
    let location = useLocation()

    if (loading) {
        return <div className='h-screen flex items-center'>
            <div class="w-12 h-12  mx-auto text-center rounded-full animate-spin
        border-4 border-solid border-secondary border-t-transparent"></div>
        </div>
    }

    if (user) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;