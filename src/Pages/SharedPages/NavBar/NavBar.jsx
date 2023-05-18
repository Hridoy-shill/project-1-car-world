import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';


const NavBar = () => {

    const { user } = useContext(AuthContext)
    console.log(user);

    return (
        <div>
            <div className="navbar px-5 items-center">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 space-y-2 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className='hover:bg-slate-600 hover:text-white hover:p-2 hover:rounded-lg duration-500'><li>Home</li></Link>
                            <Link className='hover:bg-slate-600 hover:text-white hover:p-2 hover:rounded-lg duration-500'><li>All Toys</li></Link>
                            <Link className='hover:bg-slate-600 hover:text-white hover:p-2 hover:rounded-lg duration-500'><li>Add A Toy</li></Link>
                            <Link className='hover:bg-slate-600 hover:text-white hover:p-2 hover:rounded-lg duration-500'><li>My Toys</li></Link>
                            <Link className='hover:bg-slate-600 hover:text-white hover:p-2 hover:rounded-lg duration-500'><li>Blog</li></Link>
                        </ul>
                    </div>

                    <img className='lg:w-28 w-14 lg:mt-1' src="https://i.ibb.co/jHVc8xf/cars-logo.jpg" alt="" />
                    <Link to={'/'}><p className='lg:text-xl'><span className='lg:text-4xl font-bold text-gray-700'>Car</span><span className='lg:text-xl lg:ms-2'>World</span></p></Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-7 px-1 font-bold text-lg">
                        <Link className='hover:bg-slate-600 hover:text-white hover:p-2 hover:rounded-lg duration-500'><li>Home</li></Link>
                        <Link className='hover:bg-slate-600 hover:text-white hover:p-2 hover:rounded-lg duration-500'><li>All Toys</li></Link>
                        <Link className='hover:bg-slate-600 hover:text-white hover:p-2 hover:rounded-lg duration-500'><li>Add A Toy</li></Link>
                        <Link className='hover:bg-slate-600 hover:text-white hover:p-2 hover:rounded-lg duration-500'><li>My Toys</li></Link>
                        <Link className='hover:bg-slate-600 hover:text-white hover:p-2 hover:rounded-lg duration-500'><li>Blog</li></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <img className='w-11 h-11 rounded-full lg:me-5 me-1' src="https://i.ibb.co/jHVc8xf/cars-logo.jpg" alt="" title={user.name} />

                    {user ?
                        <a className="btn">LogOut</a> :
                        <a className="btn">LogIn</a>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;