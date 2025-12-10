import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import loginVector from '../assets/loginVector.png';

const AuthLayout = () => {
  return (
    <div>
      <Navbar />
      <div className=' bg-[#f8f6f6]'>
        <div className='grid grid-cols-1 w-11/12 mx-auto items-center justify-evenly md:grid-cols-2'>
          <div className='bg-[#f8f6f6]'>
            <img className='w-[90%] mx-auto' src={loginVector} alt="" />
          </div>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;