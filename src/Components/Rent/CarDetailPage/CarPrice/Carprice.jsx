import React from "react";
import price from "../../../../assets/CarDetail/price.svg";
import rightarrow from "../../../../assets/CarDetail/rightarrow.svg";
import { Link } from "react-router-dom";
import useAuth from "../../../../Authentication/useAuth";
function Carprice() {
  const { isLoggedIn } = useAuth();
  return (
    <div className=" price w-full mt-5 ">
      <div className="price w-full flex flex-col  p-2 sm:p-3.5 md:p-4.5 lg:p-6  gap-1.5 sm:gap-2 md:gap-3 lg:gap-4  rounded-t-xl h-auto">
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-N3 font-semibold ">
          Price
        </div>
        <div className=" gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 flex justify-between bg-background rounded-lg">
          <div className="flex items-center gap-1.5 sm:2 md:gap-2.5 lg:gap-3 p-2 w-full">
            <img src={price}></img>
            <div className="flex justify-between w-full items-center">
              <div>
                <p className="font-semibold text-sm">Explore Offers</p>
                <p className="font-normal text-xs text-[#585858]">
                  Check availability here{" "}
                </p>
              </div>

              <img className="size-5" src={rightarrow}></img>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-dashed border-[#DADADA]"></hr>
        <div className="flex flex-col gap-4 ">
          <div className=" flex justify-between items-center font-normal ">
            <div className="flex gap-1 sm:gap-1.5 md:gap-2.5 lg:gap-3 text-xs text-N5 items-center ">
              <input
                type="checkbox"
                className=" size-4.5 md:size-5 lg:size-6  text-[#B2B2B2] rounded-sm"
              />
              <p>Trip protection charge</p>
            </div>
            <p className="text-N3 font-semibold text-xs sm:text-sm md:text-base">
              + $ 500
            </p>
          </div>
          <div className=" flex justify-between items-center font-normal ">
            <div className="flex gap-1 sm:gap-1.5 md:gap-2.5 lg:gap-3 text-xs text-N5 items-center ">
              <input
                type="checkbox"
                className="size-4.5 md:size-5 lg:size-6  text-[#B2B2B2] rounded-sm"
              />
              <p>Trip protection charge</p>
            </div>
            <p className="text-N3 font-semibold text-xs sm:text-sm md:text-base ">
              + $ 500
            </p>
          </div>
        </div>
        <hr className="border-t-2 border-dashed border-[#DADADA]"></hr>

        <div className="charges flex flex-col gap-1 sm:gap-1.5 md:gap-2.5 lg:gap-3">
          <div className="flex  justify-between">
            <div className="text-xs text-N5 flex ">
              <p>Rental Charge (Fuel not included)</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-semibold text-xs sm:text-sm md:text-base">
                $ 1200
              </p>
              <p className="font-normal text-xs text-N5 text-right">
                1 day 4 hours
              </p>
            </div>
          </div>
          <div className="flex  justify-between">
            <div className="text-xs text-N5 flex ">
              <p>GST</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-semibold  text-xs sm:text-sm md:text-base ">
                $ 500
              </p>
            </div>
          </div>
          <div className="flex  justify-between">
            <div className="text-xs text-N5 flex ">
              <p>Refundable deposit</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="font-semibold text-xs sm:text-sm md:text-base">
                $ 5000
              </p>
              <p className="font-normal text-xs text-N5 cursor-pointer decoration underline">
                Change
              </p>
            </div>
          </div>
        </div>
        <hr className="border-t-2 border-dashed border-[#DADADA]"></hr>
        <div className="flex justify-between  text-N3 font-semibold text-base  md:text-lg lg:text-xl">
          <p>Total amount</p>
          <p>$ 5000</p>
        </div>
      </div>
      <Link to={"/payment"}>
        <div className="bg-primary   h-12 flex items-center justify-center  text-center text-lg text-N12 rounded-b-xl  cursor-pointer">
          <span>Book Now</span>
        </div>
      </Link>
    </div>
  );
}

export default Carprice;
