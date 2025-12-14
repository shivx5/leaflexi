import React from "react";
import CarDetail from "../../Rent/HomeCars/CarDetail";

function SavedCars() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <p className="font-bold text-nowrap  text-xl  sm:text-2xl md:text-3xl lg:text-4xl text-N3">
          Saved Cars
        </p>
        <select className="  rounded-sm px-3 py-2 text-sm   border-[1px] border-[#b2b2b2] cursor-pointer w-[45%]  md:w-auto outline-none">
          <option value="All">All</option>
          <option value="Recent">Recent</option>
          <option value="Trip Completed">Trip Completed</option>
          <option value="Trip Cancelled">Trip Cancelled</option>
        </select>
      </div>
      <div className=" grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4  ">
        <CarDetail />
        <CarDetail />
        <CarDetail />
        <CarDetail />
        <CarDetail />
      </div>
    </div>
  );
}

export default SavedCars;
