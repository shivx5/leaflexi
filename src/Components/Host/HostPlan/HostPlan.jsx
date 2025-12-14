import React from "react";
import BookingList from "../../../Utility/BookingList";
import BookingCard from "../../Body/Booking/BookingCard";
import Browse from "../../../assets/Booking/browse.svg";
import Booking from "../../../assets/Booking/booking.svg";
import Key from "../../../assets/Lease/carlease.png";
function HostPlan() {
  return (
    <div className="  w-auto  lg:gap-12  md:gap-10 gap-8  lg:p-24 md:p-12 sm:p-6 p-4 bg-[#F0F0F0] grid grid-cols-4   grid-flow-row pt-10">
      <div className="flex  justify-around text-black  flex-col  gap-6  col-span-4 sm:col-span-2 md:col-span-2">
        <h1 className="font-semibold text-xl  lg:text-5xl text-center sm:text-start">
          Why Join Leaflexi?
        </h1>
        <div className="flex flex-col   min-[870px]:flex-col gap-2 md:gap-3 w-full md:w-[90%] text-nowrap">
          <div className="p-1 md:p-2 lg:p-4  flex flex-row min-[870px]:flex-col gap-3 md:gap-3.5 lg:gap-4">
            <img
              src={Browse}
              className="size-6 sm:size-8 md:size-9 lg:size-10 rounded-[8px]"
            ></img>
            <div className="flex  flex-col  gap-1 md:gap-1.5 lg:gap-2">
              <p className="lg:text-xl md:text-lg sm:text-base text-sm text-N1 font-bold">
                Earn Passive Income
              </p>
              <span className="text-N3 font-normal text-xs">
                Make money while your car works for you
              </span>
            </div>
          </div>
          <hr className="flex-1 border-t-2 text-v2 w-full sm:w-[90%]" />
          <div className="p-1 md:p-2 lg:p-4  flex flex-row min-[870px]:flex-col gap-3 md:gap-3.5 lg:gap-4">
            <img
              src={Browse}
              className="size-6 sm:size-8 md:size-9 lg:size-10 rounded-[8px]"
            ></img>
            <div className="flex  flex-col  gap-1 md:gap-1.5 lg:gap-2">
              <p className="lg:text-xl md:text-lg sm:text-base text-sm text-N1 font-bold">
                Secure Payments
              </p>
              <span className="text-N3 font-normal text-xs">
                Get paid safely and on time.
              </span>
            </div>
          </div>
          <hr className="flex-1 border-t-2 text-v2 w-full sm:w-[90%]" />
          <div className="p-1 md:p-2 lg:p-4 flex flex-row min-[870px]:flex-col gap-3 md:gap-3.5 lg:gap-4">
            <img
              src={Browse}
              className="size-6 sm:size-8 md:size-9 lg:size-10 rounded-[8px]"
            ></img>
            <div className="flex  flex-col  gap-1 md:gap-1.5 lg:gap-2">
              <p className="lg:text-xl md:text-lg sm:text-base text-sm text-N1 font-bold">
                Easy Management
              </p>
              <span className="text-N3 font-normal text-xs text-wrap">
                Control listings from your personalized dashboard.
              </span>
            </div>
          </div>
          <hr className="flex-1 border-t-2 text-v2 w-full sm:w-[90%]" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row  col-span-4 sm:col-span-2 md:col-span-2">
        <div className="w-full">
          <img
            src={Key}
            className="w-full  object-center rounded-xl  h-[80%] sm:h-full "
          ></img>
        </div>
      </div>
    </div>
  );
}

export default HostPlan;
