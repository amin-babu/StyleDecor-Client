import React from 'react';
import { Link, NavLink } from 'react-router';
import { IoMdLogIn } from "react-icons/io";
import logo from '../assets/logo.png'

const Navbar = () => {

  const links = <>
    <li className='text-[13px] font-semibold'>
      <NavLink to='/'>Home</NavLink>
    </li>
    <li className='text-[13px] font-semibold'>
      <NavLink to='' end>Servicec</NavLink>
    </li>
    <li className='text-[13px] font-semibold'>
      <NavLink to=''>About</NavLink>
    </li>
    <li className='text-[13px] font-semibold'>
      <NavLink to=''>Contact</NavLink>
    </li>
    <li className='text-[13px] font-semibold md:hidden'>
      <NavLink className={'btn-main'} to=''><IoMdLogIn size={20} /> Login</NavLink>
    </li>
  </>;

  return (
    <div className="navbar px-0 bg-white/30 backdrop-blur-lg shadow-sm">
      <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 items-center'>
        <div className="flex items-center md:col-span-3">
          <div className="md:hidden dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link to='/'>
            <img className='w-24' src={logo} alt="" />
          </Link>
        </div>
        <div className="hidden md:justify-center md:flex md:col-span-6">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="space-x-3.5 hidden md:flex justify-end md:col-span-3">
          <Link className='w-full btn-main'><IoMdLogIn size={20} /> Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;