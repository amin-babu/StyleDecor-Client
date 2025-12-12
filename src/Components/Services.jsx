import React from 'react';
import ServiceCard from './ServiceCard';
import { useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useEffect } from 'react';

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

  // const dummyServices = [
  //   {
  //     title: "Wedding Stage Decoration",
  //     shortDescription: "Premium floral wedding stage with luxury backdrop & lighting.",
  //     imageUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTaAV5WNvwH5bE5xKmNLCCLf5lELWy9eMfg&s",
  //     price: 12000,
  //     rating: 4.9,
  //     duration: "Full day",
  //     people: "Up to 400 guests",
  //     isPopular: true,
  //   },
  //   {
  //     title: "Birthday Event Setup",
  //     shortDescription: "Colorful birthday theme with balloons, neon lights & cake table.",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=900",
  //     price: 5000,
  //     rating: 4.7,
  //     duration: "4 hours",
  //     people: "Up to 100 guests",
  //     isPopular: false,
  //   },
  //   {
  //     title: "Corporate Event Decoration",
  //     shortDescription: "Professional corporate stage, banner stand, & lighting setup.",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=900",
  //     price: 9000,
  //     rating: 4.8,
  //     duration: "8 hours",
  //     people: "Up to 250 guests",
  //     isPopular: true,
  //   },
  //   {
  //     title: "Corporate Event Decoration",
  //     shortDescription: "Professional corporate stage, banner stand, & lighting setup.",
  //     imageUrl:
  //       "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=900",
  //     price: 9000,
  //     rating: 4.8,
  //     duration: "8 hours",
  //     people: "Up to 250 guests",
  //     isPopular: true,
  //   },
  //   {
  //     title: "Wedding Stage Decoration",
  //     shortDescription: "Premium floral wedding stage with luxury backdrop & lighting.",
  //     imageUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTaAV5WNvwH5bE5xKmNLCCLf5lELWy9eMfg&s",
  //     price: 12000,
  //     rating: 4.9,
  //     duration: "Full day",
  //     people: "Up to 400 guests",
  //     isPopular: true,
  //   }
  // ];


  return (
    <div className='py-10 bg-base-200'>
      <h2 className='text-center text-secondary mb-2 text-2xl md:text-4xl font-bold'>Make Every Moment Magical</h2>
      <p className='text-center text-[14px] md:text-lg max-w-[85%] md:max-w-auto mx-auto'>Beautifully crafted decoration packages for unforgettable celebrations - book a pro decorator today.</p>


      {/* Grid Layout */}
      <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;