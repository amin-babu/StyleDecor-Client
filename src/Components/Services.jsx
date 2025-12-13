import React from 'react';
import ServiceCard from './ServiceCard';
import { useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useEffect } from 'react';
import { Link } from 'react-router';

const Services = () => {

  const [services, setServices] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/services/home")
      .then(res => {
        setServices(res.data);
      })
      .catch(err => console.error(err));
  }, [axiosSecure]);

  return (
    <div className='py-20 bg-base-200'>
      <h2 className='title'>Make Every Moment Magical</h2>
      <p className='text-center text-[14px] md:text-lg max-w-[85%] md:max-w-auto mx-auto'>Beautifully crafted decoration packages for unforgettable celebrations - book a pro decorator today.</p>


      {/* Grid Layout */}
      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

      <div className='flex justify-center pt-10'>
        <button className="btn-main">
          <Link to='/services'>All Decoration Services</Link>
        </button>
      </div>
    </div>
  );
};

export default Services;