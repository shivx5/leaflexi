import React from "react";
import ServiceSettings from "../../../assets/settings.svg";
import keyImg from "../../../assets/Rent/car2.jpg";
import PropTypes from "prop-types"
import OfferCard from "./OfferCard";
import Explore from "../../../CustButton/Explore";

function Offer() {
  return (
    <div className="flex flex-col h-auto bg-[#2C292A] px-4 sm:px-6 md:px-12 lg:px-24 sm:py-4 md:py-8 lg:py-14 py-10 w-auto gap-8 md:gap-10 relative z-1">
      <div className="flex justify-between text-white md:items-end flex-col md:flex-row gap-[20px]">
        <h1 className="font-bold lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-[#F0F0F0]">
          Leasing a car?
        </h1>

        <p className="md:text-lg text-[#B2B2B2] font-[500] sm:text-base text-sm md:w-[48%]">
          Flexible leasing and rental options designed to meet your personal and business needs seamlessly.
        </p>
      </div>

      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-4">
        {/* Image with alt and fallback */}
        <img
          src={keyImg}
          alt="Car Leasing Image"
          className="h-full rounded-3xl object-cover"
        />

        <div className="flex flex-col justify-between p-5 sm:p-6 md:p-8 rounded-3xl lg:p-10 bg-[#F4F4F4] lg:gap-14 md:gap-12 sm:gap-8 gap-4">
          <h3 className="lg:text-4xl text-2xl sm:text-3xl font-[700] text-[#0A0A0A]">
            Lease
          </h3>

          <div className="flex flex-col lg:gap-7 md:gap-6 sm:gap-5 gap-4">
            <div className="flex flex-col lg:gap-3 gap-1">
              <p className="sm:text-base text-sm font-[800] text-[#4D4D4D]">
                Long-term, cost-effective plans - 1 to 6 years
              </p>
              <p className="text-[#4D4D4D] sm:text-sm text-xs font-[400] line-clamp-5 sm:line-clamp-2">
                A long-term (1–6 years) vehicle agreement with fixed monthly payments, ideal for regular use without ownership.
              </p>
              <p className="text-[#4D4D4D] sm:text-sm text-xs font-[400] line-clamp-2 sm:line-clamp-3 md:line-clamp-4 lg:line-clamp-none">
                Car leasing allows customers to use a vehicle for a fixed period by paying monthly rentals instead of purchasing it. It offers flexibility in choosing a car, upgrading options, and includes maintenance services. At the end of the lease term, users can return, renew, or purchase the vehicle.
              </p>
            </div>
          </div>
          <Explore name="Know more" icon={true} />
        </div>
      </div>
    </div>
  );
}

Offer.propTypes = {
  keyImg: PropTypes.string,
};


export default Offer;
