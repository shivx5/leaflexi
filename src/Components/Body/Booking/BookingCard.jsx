import React from "react";
// import ServiceSettings from '../../assets/settings.svg'
import PropTypes from "prop-types";

function BookingCard({ SingleBookingCardDDetail, type, host }) {
  // Destructure the data passed into the component
  const { name, desc, icon } = SingleBookingCardDDetail;

  // Optional: If the hover gradient styles are complex, we can define them as a constant.
  const hoverStyle =
    type === "lease"
      ? "hover:bg-[linear-gradient(180deg,_rgba(33,51,214,0.6)_0%,_rgba(125,33,207,0.6)_65%)]"
      : "";

  return (
    <div
      className={`flex md:flex-col px-3 sm:px-4 md:px-5 lg:px-6  shadow-md
      sm:py-6 md:py-8 lg:py-10 py-4 rounded-lg gap-3 sm:gap-4 md:gap-5 lg:gap-6 
      bg-[#FFFFFF] border-[1px] border-[#E8E8E8]  hover:transition-colors duration-500 ${hoverStyle} ${
        host === true && "w-full"
      }`}
    >
      {/* Image */}
      <img
        src={icon}
        alt={name} // Added alt for accessibility
        className="size-6 sm:size-8 md:size-9 lg:size-10 rounded-[8px] object-cover bg-[#FFFFFF]"
      />

      {/* Text Content */}
      <div className="flex flex-col gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-2">
        <h2 className="lg:text-xl md:text-lg sm:text-base text-sm font-[700] text-[#0A0A0A]">
          {name}
        </h2>
        <p className="text-xs md:text-sm font-[400] text-[#666666]">{desc}</p>
      </div>
    </div>
  );
}

// Prop Types validation

export default BookingCard;
