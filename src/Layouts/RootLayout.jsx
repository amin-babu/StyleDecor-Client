import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className='text-right'>this is root RootLayout</div>
      <Footer />
    </div>
  );
};

export default RootLayout;