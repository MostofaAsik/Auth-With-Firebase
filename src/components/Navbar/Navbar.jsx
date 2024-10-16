import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext)


    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('signOut successful');
            })
    }
    const navLinks = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/signin'}>SignIn</NavLink></li>
        <li><NavLink to={'/orders'}>Orders</NavLink></li>

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
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Auth</a>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-3 ">
                    {navLinks}
                </ul>
            </div>
            {
                user && <p>{user.displayName || user.email} </p>

            }
            <button onClick={handleSignOut} className='btn btn-sm'>Sign Out</button>
            <p>{ }</p>
        </div>
    );
};

export default Navbar;