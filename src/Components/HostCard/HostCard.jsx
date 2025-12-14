import React from "react";
import Explore from "../../CustButton/Explore.jsx";
import Car from "../../assets/Question/car.jpg";
import PropTypes from "prop-types";
import Arrow from "../../assets/CarDetail/BlueArrow.svg";

function HostCard({ data }) {
  const { button, id, que, desc, img, type } = data || {}; // Destructuring for cleaner code

  return (
    <div className="lg:px-24 md:px-12 sm:px-6  px-4  h-[50dvh] md:h-[60dvh] min-[1100px]:h-[90dvh] w-full flex justify-center items-center pb-4 md:pb-7 pt-5  md:pt-10">
      <div className="relative w-full h-3/4  sm:h-3/4 lg:h-full">
        <img
          className="rounded-2xl w-full h-full object-cover "
          src={Car}
          alt="Question related"
        />{" "}
        {/* Alt text for accessibility */}
        <div className="flex flex-col   gap-2 min-[500px]:gap-3 md:gap-4 lg:gap-5   absolute top-8 right-4 sm:right-8 h-full sm:h-3/4 justify-center items-end text-end  text-[#ffffff]">
          <h1 className="font-bold lg:text-5xl md:text-3xl sm:text-2xl text-xl">
            Become a Host
          </h1>

          <p className="line-clamp-3 sm:line-clamp-4 md:line-clamp-5 xl:line-clamp-none text-xs md:text-sm  text-wrap w-[90%] sm:w-[70%] ">
            {desc}
          </p>
          <div
            className="flex flex-col  "
            onClick={() => {
              // console.log("clicked");
            }}
          >
            <div className="flex justify-center items-center cursor-pointer">
              <button className="flex gap-1.5 sm:gap-2  md:gap-2.5 p-2  md:p-4   w-auto  rounded-sm md:rounded-md bg-[#ffffff] items-center justify-center h-8 md:h-10 ">
                <span className="text-primary font-semibold text-xs md:text-sm lg:text-base">
                  Get Started
                </span>
                <img
                  src={Arrow}
                  className=" size-2.5 sm:size-3 lg:size-3.5"
                ></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Adding PropTypes for better code safety and to ensure valid prop types

export default HostCard;
