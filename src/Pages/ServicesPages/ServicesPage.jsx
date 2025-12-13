import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import ServiceCard from '../../Components/ServiceCard';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/services")
      .then(res => {
        setServices(res.data);
      })
      .catch(err => console.error(err));
  }, [axiosSecure]);

  return (
    <div className='bg-base-200'>
      <div className='pb-16 pt-30 w-11/12 mx-auto'>
        <h2 className='title'>Our Decoration Services</h2>
        <p className='text-center text-[14px] md:text-lg max-w-[85%] md:max-w-auto mx-auto'>Explore all our available decoration services — choose by category, budget, and style to perfectly match your event.</p>


        {/* Grid Layout */}
        <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;