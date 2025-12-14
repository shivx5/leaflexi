import React, { useState } from "react";
import car from "../../../assets/cardetail.jpg";
import Heart from "../../../assets/Rent/Heart1.svg";
import phone from "../../../assets/Rent/phone.svg";
import petrol from "../../../assets/Rent/petrol.svg";
import automatic from "../../../assets/Rent/automatic.svg";
import milage from "../../../assets/CarDetail/Milagee.svg";
import { FaRegHeart } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
function CarDetail({ type }) {
  const available = true;
  const [liked, setLiked] = useState(false);
  // w-40 sm:w-52 md:w-60 lg:w-72
  return (
    <>
      <div
        className={`flex flex-col gap-3  bg-[#FFFFFF] border-[1px] border-[#F2F2F2] rounded-lg  p-1.5 sm:p-2 md:p-2.5 lg:p-3 cursor-pointer shadow-md ${
          type === "flex" ? "w-full min-w-[295px] max-w-[328px] h-auto" : "full"
        }`}
      >
        <div className="relative overflow-hidden rounded-lg">
          <img
            className="rounded-lg w-full  object-cover transform transition-transform  duration-800 hover:scale-120 hover:origin-right"
            src={car}
          ></img>
          <div
            className={`absolute top-0 left-0   text-xs  py-1.5  px-2.5 rounded-br-sm ${
              available
                ? "text-white bg-primary "
                : "bg-[#F1EDFC]  text-[#7149E1]"
            }`}
          >
            Available Now
          </div>
          <div
            onClick={() => {
              setLiked(!liked);
            }}
            className=" flex items-center justify-center rounded-[50%] size-8  md:size-5 lg:size-6 absolute  top-2 right-2  hover:duration-400 ease-in-out hover:bg-violet-200 bg-white active:bg-violet-200 "
          >
            {/* <Heart /> */}
            {liked ? (
              <BsFillHeartFill
                color="#7149e1"
                className="duration-300 ease-in-out size-4  md:size-3 "
              />
            ) : (
              <BsHeart className="size-4  md:size-3 " />
            )}
          </div>
        </div>

        <div className="flex flex-col    gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4">
          <div className="flex flex-col  gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4">
            <div className="flex flex-col  gap-2 px-1">
              <h1 className="text-N3 text-sm md:text-base  font-medium">
                Toyota Corolla 2023
              </h1>
              <div className="flex items-center  gap-2  flex-wrap">
                <div className="flex items-center mb-2 gap-1  text-center">
                  <img
                    className=" size-2.5 md:size-3  lg:size-3.5"
                    src={phone}
                  ></img>
                  <span className="text-xs text-[#666666]">5 seats</span>
                </div>
                <div className="flex items-center mb-2 gap-1  text-center">
                  <img
                    className="size-2.5 md:size-3  lg:size-3.5 "
                    src={petrol}
                  ></img>
                  <span className="text-xs text-[#666666]">petrol</span>
                </div>
                <div className="flex items-center mb-2 gap-1  text-center">
                  <img
                    className="size-2.5 md:size-3  lg:size-3.5"
                    src={automatic}
                  ></img>
                  <span className="text-xs text-[#666666]">Automatic</span>
                </div>
              </div>
              <div className="font-bold text-N2   text-xs md:text-sm ">
                ₹ 250/ hour{" "}
              </div>
              <hr
                className=" border-N9
] border-dashed"
              />
              <div className="flex gap-1 items-center ">
                <img src={milage} className=""></img>
                <span className="font-semibold  text-[#4C4C4C]  text-xs sm:text-[10px] flex">
                  {" "}
                  27.3 Km Away{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarDetail;
