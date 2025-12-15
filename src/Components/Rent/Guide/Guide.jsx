import React from "react";
import list from "../../../assets/Guide/list.svg";
import car from "../../../assets/Guide/car.jpg";
import play from "../../../assets/Guide/play.svg";

function Guide() {
  return (
    <div className="relative z-0 bg-gradient-to-r from-white via-purple-200 to-white  flex items-center justify-center py-10  my-10 px-4 sm:px-6 md:px-12 lg:px-24 ">
      <div className="max-w-7xl w-full flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-16 ">
        {/* Left Side - Image */}
        <div
          className="relative w-full sm:w-[80%] lg:w-[50%] h-[25rem] bg-cover rounded-3xl"
          style={{ backgroundImage: `url(${car})` }}
        >
          {/* <img src={car} alt="Car" className="rounded-xl object-cover " /> */}
          <img
            src={play}
            alt="Play Icon"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-12 sm:size-14 md:size-16 lg:size-20"
          />
        </div>
        {/* w-full sm:w-[90%] lg:w-[50%]  gap-4 sm:gap-2 md:gap-2 lg:gap-8  flex flex-col */}
        {/* Right Side - Content */}
        <div className="  flex flex-col justify-between  gap-4 sm:gap-6 md:gap-10 ">
          {/* Top Launching Text */}
          <div className="flex flex-col gap-2 md:gap-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <div className="h-2.5 w-2.5 bg-primary rounded-full"></div>
              <span className="font-bold text-xs md:text-sm lg:text-base text-primary">
                Launching soon
              </span>
            </div>

            <h3 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#050B20]">
              Leasing a car?
            </h3>
            <p className="text-[#666666] font-medium text-sm md:text-base lg:text-lg">
              Long-term, cost-effective plans – 1 to 6 years
            </p>
          </div>

          {/* Feature List */}
          <div className="flex flex-col gap-2 md:gap-2">
            {[
              "Affordable Monthly Rentals",
              "Flexible Lease Terms – Choose the duration that suits your needs and budget.",
              "Easy booking process – quick and hassle-free",
              "Perfect blend of comfort, quality, and savings",
            ].map((text, index) => (
              <div key={index} className="flex  items-start gap-3 ">
                <img src={list} className="size-5" />
                <p className="font-medium text-sm md:text-sm text-[#050B20]">
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="pt-2">
            <button className="bg-primary px-4 py-2 md:px-6 md:py-3 rounded-md text-center font-semibold text-sm md:text-base text-N12 w-32 md:w-48">
              Subscribe Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Guide;
