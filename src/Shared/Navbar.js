import React from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Navbar = () => {
    const activeLinks = ({ isActive }) => {
        return {
            borderBottom: isActive && '3px solid black',
        }
    }

    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then(() => {

            })
            .catch(err => console.log(err))
    }

    return (
        <div className='w-full bg-primary border-b-2 border-secondary '>
            <div className="navbar  md:w-10/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">

                        <label tabIndex={0} className="btn btn-ghost text-white lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                            <li className='text-white hover:text-secondary rounded-lg m-0 p-0 font-bold'><Link to='/' className=''>Home</Link></li>
                            <li className='text-white hover:text-secondary rounded-lg m-0 p-0 font-bold'><Link > Dishes</Link></li>
                            <li className='text-white hover:text-secondary rounded-lg m-0 p-0 font-bold'><Link > About </Link></li>
                            <li className='text-white hover:text-secondary rounded-lg m-0 p-0 font-bold'><Link to='/menu'> Menu </Link></li>
                        </ul>
                    </div>
                    <h1 className="btn btn-ghost text-white normal-case text-2xl">Kaffen</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-white hover:text-secondary rounded-lg m-0 p-0 font-bold  '><Link to="/" className=''>Home</Link></li>
                        <li className='text-white hover:text-secondary rounded-lg m-0 p-0 font-bold'><Link > Dishes</Link></li>
                        <li className='text-white hover:text-secondary rounded-lg m-0 p-0 font-bold'><Link to='/menu'> Menu </Link></li>
                        <li className='text-white hover:text-secondary rounded-lg m-0 p-0 font-bold'><Link > About </Link></li>

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item text-secondary font-bold ">8</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg text-secondary">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://kaffen.bslthemes.com/wp-content/uploads/2022/03/menu3.jpg" alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary text-white font-bold rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>

                            {
                                user?.uid ?
                                    <Link onClick={handleLogout} className="text-start"><li><a >Log Out</a></li></Link> :
                                    <Link to='/login' className="">
                                        <li><a>Login</a></li>
                                    </Link>
                            }

                            {/* <li><a>Logout</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;