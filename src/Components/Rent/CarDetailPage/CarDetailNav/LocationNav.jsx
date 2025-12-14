import React from "react";
import verified from "../../../../assets/CarDetail/verified.svg";
import human from "../../../../assets/CarDetail/profile.svg";

import blueArrow from "../../../../assets/CarDetail/blueArrow.svg";
import WhiteArrow from "../../../../assets/Payment/whiteArrow.svg";
import map from "../../../../assets/CarDetail/map.svg";
import Feedback from "../../../Profile/Feedback/Feedback";
function LocationNav({ type, status }) {
  return (
    <div className="flex flex-col gap-3.5 sm:gap-4 md:gap-5 lg:gap-6">
      <div className="verified-dealer  flex flex-col gap-3.5 sm:gap-4 md:gap-4 lg:gap-5 ">
        <div className="flex items-center gap-2 md:gap-3.5 lg:gap-4">
          <p className="font-semibold text-sm sm:text-md md:text-lg lg:text-xl">
            Owner / Dealer name
          </p>
          <div className="flex items-center gap-1.5  md:gap-2 lg:gap-2.5 px-1.5 md:px-2 lg:px-2.5 py-0.5 md:py-1 lg:py-1.5 bg-[#DFECDF] rounded-lg text-xs font-[500]">
            {" "}
            <img className=" size-3.5 lg:size-4" src={verified}></img>{" "}
            <span className="text-[#0B970E] text-xs">Verified dealer</span>{" "}
          </div>
        </div>
        <div className="flex items-center font-medium text-xs gap-2">
          <img className="size-6" src={human}></img>
          <span className="text-xs md:text-base">Rajesh Kumar</span>
          <span>.</span>
          <span className="text-[#666666] text-xs md:text-base">
            Speed Auto Rentals Pvt Ltd
          </span>
        </div>
        {type === "payment" && status !== "past" && (
          <div className=" cursor-pointer text-center items-center justify-center bg-primary font-semibold text-xs md:text-base rounded-md flex gap-1.5 md:gap-2.5 p-1.5 md:p-2.5 w-44 sm:w-52 md:w-64 lg:w-72 h-8 md:h-12 lg:h-14 hover:bg-v9">
            <p className=" text-xs sm:text-sm  md:text-lg text-N12 font-semibold">
              Contact Owner / dealer
            </p>
            <img src={WhiteArrow} className=" size-2.5 md:size-3.5"></img>{" "}
          </div>
        )}
        <hr className="border-t-2 border-dashed border-[#dadada]"></hr>
      </div>
      {type === "payment" && status !== "past" && (
        <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
          <p className="font-semibold text-sm sm:text-md md:text-lg lg:text-xl">
            Pickup Instruction
          </p>
          <p className=" text-xs text-[#666666] md:text-base ">xyz</p>
        </div>
      )}
      {status !== "past" && (
        <div className="location flex flex-col gap-3.5 sm:gap-4 md:gap-5 lg:gap-6">
          <div className="flex flex-col gap-1 md:gap-1.5 lg:gap-2">
            <p className="font-semibold text-sm sm:text-md md:text-lg lg:text-xl">
              Location
            </p>
            <p className=" font-medium text-xs sm:text-sm md:text-base text-[#666666]">
              Anna Nagar, 1st Avenue, Chennai, Tamil Nadu, 600040
            </p>
          </div>
          <div className="text-[#405FF2] text-xs sm:text-sm md:text-base flex gap-4 items-center cursor-pointer">
            <p className="font-bold"> Get Direction</p>
            <img className=" size-3 md:size-3.5" src={blueArrow}></img>
          </div>
          <div>
            <img src={map}></img>
          </div>
        </div>
      )}

      {status === "past" && <Feedback />}
    </div>
  );
}

export default LocationNav;
