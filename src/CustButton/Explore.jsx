import React from "react";
import Arrow from "../assets/Rent/Arrow.svg";
function Explore({ name, icon }) {
  return (
    <div
      className=" flex justify-center p-1 sm:p-1.5 md:p-2 lg:p-2.5 gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5 bg-[#7149E1] hover:bg-[#3e287c] font-semibold  w-32 sm:w-44 md:w-48
    lg:w-56 h-8 sm:h-9 md:h-12 lg:h-14 rounded-lg items-center cursor-pointer"
    >
      {
        <span className="font-semibold text-[#FAFAFA] text-xs sm:text-sm lg:text-base">
          {name}
        </span>
      }
      {icon && (
        <img className=" size-1.5 sm:size-2.5 lg:size-3.5" src={Arrow}></img>
      )}
    </div>
  );
}

export default Explore;
