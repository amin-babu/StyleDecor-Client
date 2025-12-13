import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import ServiceCard from '../../Components/ServiceCard';

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const axiosSecure = useAxiosSecure();

  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");


  useEffect(() => {
    axiosSecure.get("/services")
      .then(res => {
        setServices(res.data);
      })
      .catch(err => console.error(err));
  }, [axiosSecure]);

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    const matchesCategory = category
      ? service.category === category
      : true;

    const price = service.price;
    const matchesMin = minPrice ? price >= minPrice : true;
    const matchesMax = maxPrice ? price <= maxPrice : true;

    return matchesSearch && matchesCategory && matchesMin && matchesMax;
  });


  return (
    <div className='bg-base-200'>
      <div className='pb-16 pt-30 w-11/12 mx-auto'>
        <h2 className='title'>Our Decoration Services</h2>
        <p className='text-center text-[14px] md:text-lg max-w-[85%] md:max-w-auto mx-auto'>Explore all our available decoration services — choose by category, budget, and style to perfectly match your event.</p>


        {/* Filter Section */}
        <div className="bg-base-100 p-4 rounded-xl shadow mb-8 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

            {/* Search */}
            <input
              type="text"
              placeholder="Search by service name"
              className="input input-bordered w-full"
              onChange={(e) => setSearchText(e.target.value)}
            />

            {/* Category */}
            <select
              className="select select-bordered w-full"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="wedding">Wedding</option>
              <option value="home">Home</option>
              <option value="office">Office</option>
              <option value="event">Event</option>
            </select>

            {/* Min Budget */}
            <input
              type="number"
              placeholder="Min Budget"
              className="input input-bordered w-full"
              onChange={(e) => setMinPrice(e.target.value)}
            />

            {/* Max Budget */}
            <input
              type="number"
              placeholder="Max Budget"
              className="input input-bordered w-full"
              onChange={(e) => setMaxPrice(e.target.value)}
            />

          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;