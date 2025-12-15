import React from "react";
import BookingImg from "../../../assets/Booking/booking.svg";
import Browse from "../../../assets/Booking/browse.svg";
import Delivery from "../../../assets/Booking/delivery.svg";
import Drive from "../../../assets/Booking/drive.svg";
import Instant from "../../../assets/Booking/instant.svg";
import PropTypes from "prop-types";

import BookingList from "../../../Utility/BookingList";
import BookingCard from "./BookingCard";

function Booking({ id, host }) {
  // Destructure the BookingList data for easy access
  const { type, title1, title2, para, style, data } = BookingList[id] || {};

  return (
    <div className="flex flex-col h-auto w-auto lg:gap-12 md:gap-10 sm:gap-8 gap-6 lg:p-24 md:p-12  p-4 mt-4  ">
      {/* Header Section */}

      {/* Main Content Section */}
      <div className="flex   sm:justify-between   text-black  flex-col md:flex-row lg:gap-5 md:gap-4 sm:gap-3 gap-2   ">
        <h1
          className={`font-bold  text-xl sm:text-3xl md:text-5xl text-center md:text-start  `}
        >
          {title2}
        </h1>
        <p className="md:w-[48%] mt-2 flex self-start lg:text-lg md:text-base sm:text-sm text-xs  text-[#666666] text-centre md:text-start">
          {para}
        </p>
      </div>

      {/* Booking Cards Section */}
      <div
        className={`text-wrap  ${style} gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-between  ${
          host == true
            ? "flex flex-col w-full sm:w-[90%]"
            : "grid grid-cols-1 min-[500px]:grid-cols-2"
        }`}
      >
        {data?.map((item) => (
          <BookingCard
            SingleBookingCardDDetail={item}
            key={item.id} // Make sure item.id is unique and consistent
            type={type}
            host={host}
          />
        ))}
      </div>
    </div>
  );
}

// PropTypes validation (optional)
Booking.propTypes = {
  id: PropTypes.number.isRequired, // Ensuring 'id' is passed as a number
};

export default Booking;
