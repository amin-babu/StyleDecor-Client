import React from "react";
import { Link } from "react-router";
// import priceIcon from "../assets/icon-price.png"; 
import ratingIcon from "../assets/icon-ratings.png";

const ServiceCard = ({ service }) => {
  const {
    _id,
    title,
    shortDescription,
    imageUrl,
    price,
    rating,
  } = service;

  return (
    <div>
      <div className="card bg-base-100 shadow-md rounded-md p-3 space-y-1 hover:shadow-lg transition-all">

        {/* Image */}
        <figure>
          <img
            src={imageUrl}
            alt={title}
            className="rounded-lg w-full h-48 object-cover"
          />
        </figure>

        {/* Title */}
        <h3 className="font-semibold text-[#001931] text-lg">
          {title}
        </h3>

        {/* Short Description */}
        <p className="text-gray-600 text-[15px]">{shortDescription}</p>

        {/* Badge Row */}
        <div className="flex items-center justify-between mt-1">

          {/* Price Badge */}
          <div className="badge py-3 px-2 rounded-sm bg-[#F1F5E8] text-[#00A96E] flex items-center gap-1">
            <span className="font-medium">৳</span> {price}
          </div>

          {/* Rating Badge */}
          <div className="badge py-3 px-2 rounded-sm bg-[#FFF0E1] text-[#FF8811] flex items-center gap-1">
            <img className="w-4" src={ratingIcon} alt="" />
            {rating}
          </div>
        </div>

        {/* CTA Button */}
        <button
          className="btn-main mt-3"
        >
          <Link
            to={`/services/${_id}`}>
            View Details
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
