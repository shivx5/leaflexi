import React, { useRef, useState } from "react";
import Explore from "../../CustButton/Explore.jsx";
import Feature from "../Body/Features/Feature.jsx";
import Location from "../../assets/Rent/location.svg";
import Calendar from "../../assets/Rent/calendar.svg";
import Divider from "../../assets/Rent/VerticalDivider.svg";
import search from "../../assets/Rent/search.svg";
import car from "../../assets/Rent/Carimg.jpg";
import RentData from "./RentData/RentData.jsx";

// Refer Shadcn Ui
function Rent() {
  const [enable, setEnable] = useState(false);
  const [rentOrLease, setRentOrLease] = useState(1);

  function enableInput() {
    setEnable(!enable);
    // console.log(enable);
  }
  // min-h-[80svh]
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="  absolute  -z-30  h-screen inset-0">
        <img src={car} className="object-cover h-screen w-screen "></img>
      </div>
      <div className="flex flex-col gap-6 md:gap-10 lg:gap-14 w-full    px-4 sm:px-6 md:px-12 lg:px-24  pt-10">
        <div className="  flex text-center items-center justify-around  ">
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-N12 w-[80%]    leading-8  md:leading-12 lg:leading-16">
            Freedom to Roam – Self Drive Made Easy in Chennai
          </h1>
        </div>

        <div className=" p-5 sm:p-6 md:p-7 lg:p-8 bg-[#FFFFFF] flex flex-col  gap-7 sm:gap-8 md:gap-9 lg:gap-10 rounded-2xl">
          <div className="flex  flex-col gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4  ">
            {/* <div className="flex sm:justify-between items-center gap-4 rent-button sm:flex-row flex-col justify-center">
              <div>
                <button
                  className={` py-1 sm:py-1.5 md:py-2 lg:py-2.5  px-2 sm:px-2.5 md:px-3 lg:px-3.5   w-28 lg:w-32 h-10 md:h-12  border-1 border-v6    rounded-l-sm md:rounded-l-md lg:rounded-l-lg text-v6  cursor-pointer  text-xs  md:text-sm font-semibold ${
                    rentOrLease === 1
                      ? "bg-v6 text-white transition-colors duration-500"
                      : "hover:bg-v1"
                  }`}
                  id={1}
                  onClick={() => setRentOrLease(1)}
                >
                  Rent
                </button>
                <button
                  className={` py-1 sm:py-1.5 md:py-2 lg:py-2.5  px-2 sm:px-2.5 md:px-3 lg:px-3.5   w-28 lg:w-32 h-10  md:h-12   border-1 border-v6 rounded-r-sm md:rounded-r-md lg:rounded-r-lg text-v6  cursor-pointer  text-xs  md:text-sm font-semibold ${
                    rentOrLease === 2
                      ? "bg-v6 text-white transition-colors duration-500"
                      : "hover:bg-v1"
                  }`}
                  id={2}
                  onClick={() => setRentOrLease(2)}
                >
                  Lease
                </button>
              </div>
              <div className="flex items-center gap-3 ">
                <input
                  type="checkbox "
                  className="size-4 sm:size-5 md:size-6 border-[1.5px] border-[#b2b2b2] rounded-sm"
                />
                <span className="text-N2 font-normal text-xs md:text-sm lg:text-base">
                  Doorstep Delivery
                </span>
              </div>
            </div> */}
            <div className="flex flex-col  sm:flex-row sm:justify-between gap-1">
              <p className="text-lg font-bold text-nowrap">
                Book Self-Drive Cars in{" "}
                <span className="text-primary ">Chennai</span>
              </p>{" "}
              <div className="flex items-center gap-3 justify-center sm:justify-start">
                <input
                  type="checkbox"
                  className="size-4 sm:size-5 border-[1.5px] border-[#b2b2b2] rounded-sm"
                />
                <span className="text-N2 font-normal text-xs md:text-sm lg:text-base">
                  Doorstep Delivery
                </span>
              </div>
            </div>
            <RentData button={true} from={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rent;
// moment().format('MMMM Do YYYY, h:mm:ss a').split(',')[0] // to see date
// moment().format('MMMM Do YYYY, h:mm:ss a').split(',')[1]
{
  /* <div className="flex flex-col  gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4  mb-5">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-N4">
                Time
              </span>
              <div className="flex items-center py-1 sm:py-1.5 md:py-2 lg:py-2.5  px-2.5 sm:px-3 md:px-3.5 lg:px-4  h-10 sm:h-11 md:h-12 lg:h-14 gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 border-1 border-N8 rounded-md ">
                <input
                  type="time"
                  value={`00:00`}
                  placeholder="00:00"
                  className="focus:outline-none focus:ring-0 cursor-pointer"
                />
              </div>
            </div> */
}

{
  /* </div> */
}
{
  /* <div className="flex flex-col  gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4  mb-5">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-N4">
                Drop date
              </span>

              <div className=" flex  items-center py-1 sm:py-1.5 md:py-2 lg:py-2.5  px-2.5 sm:px-3 md:px-3.5 lg:px-4  h-10 sm:h-11 md:h-12 lg:h-14 gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 border-1 border-N8 rounded-md ">
                <input
                  type="date"
                  className="focus:outline-none focus:ring-0 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col  gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4  mb-5">
              <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-N4">
                Time
              </span>
              <div className="flex items-center py-1 sm:py-1.5 md:py-2 lg:py-2.5  px-2.5 sm:px-3 md:px-3.5 lg:px-4  h-10 sm:h-11 md:h-12 lg:h-14 gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 border-1 border-N8 rounded-md">
                <input
                  type="time"
                  value={"00:00"}
                  className="focus:outline-none focus:ring-0 cursor-pointer"
                />
              </div>
            </div> */
}
