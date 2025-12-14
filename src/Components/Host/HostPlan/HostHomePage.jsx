import React from "react";
import Arrow from "../../../assets/Rent/Arrow.svg";
import car from "../../../assets/Rent/CarImg.jpg";

function HostHomePage() {
  return (
    <div className=" min-h-screen relative flex items-center justify-center">
      <div className="  -z-10 h-full">
        <img src={car} className=" object-cover  h-screen  "></img>
      </div>
      <div className="flex flex-col absolute top-0  h-full items-center justify-center w-full p-4 text-center z-10 ">
        <div className="flex  w-full   flex-col  items-center justify-center gap-6">
          <h2 className="font-bold  text-2xl sm:text-3xl md:text-5xl lg:text-6xl  text-N12">
            Turn Your Car into Income – Join Leaflexi!
          </h2>

          <div className="flex flex-col w-full md:w-[50%]  gap-8 md:gap-6 items-center ">
            <p className="font-medium  text-xs sm:text-sm md:text-base text-N12">
              Flexible plans, zero hassle-drive the way you want, when you want
            </p>
            <div className="flex gap-2.5 p-3 border-[1px] w-40 md:w-48 lg:w-56 border-primary rounded-md cursor-pointer items-center justify-center bg-primary h-10 md:h-12">
              <p className="text-N12 text-nowrap text-sm">Become a Host</p>
              <img src={Arrow} className="size-3"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostHomePage;
