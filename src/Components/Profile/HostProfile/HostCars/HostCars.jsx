import React, { useState } from "react";
import car from "../../../../assets/Rent/car.jpg";
import money from "../../../../assets/Profile/moneyBag.svg";
import menu from "../../../../assets/Host/menu.svg";
import { IoIosClose } from "react-icons/io";

function HostCars() {
  const [enableMenu, setEnableMenu] = useState(false);
  return (
    <div className="flex gap-3 sm:gap-4  md:gap-5 lg:gap-6 p-3 w-full rounded-md bg-[#F7F7F7] relative">
      <section className="w-44 h-auto sm:h-36  sm:w-56  rounded-lg">
        <img src={car} className="w-full h-full rounded-lg object-cover"></img>
      </section>
      <section className="w-full flex flex-col justify-around p-0.5  md:p-2 gap-1">
        <div className="flex justify-between ">
          <div className="flex gap-2 items-center">
            <h4 className="font-bold  text-xs md:text-sm lg:text-base text-[#0A0A0A]">
              Toyota Corolla 2023
            </h4>
            <span className="text-xs text-N3 ">SUV</span>
          </div>
          {!enableMenu && (
            <img
              src={menu}
              onClick={() => {
                setEnableMenu(true);
              }}
              className="cursor-pointer size-3  md:size-4 "
            ></img>
          )}
          {enableMenu && (
            <section className="  inset-0 z-50 flex overflow-hidden  ">
              <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={() => setEnableMenu(false)}
              ></div>

              <div className="flex flex-col gap-3 p-3 font-medium text-xs text-N5 bg-[#FFFFFF] rounded-lg z-50  absolute right-5 top-0  ">
                <div className="border-1 border-[#E8E8E8] p-2.5 rounded-md text-center cursor-pointer">
                  View details
                </div>
                <div className="border-1 border-[#E8E8E8] p-2.5 rounded-md text-center cursor-pointer">
                  Edit details
                </div>
                <div className="border-1 border-[#FE0B0B] p-2.5 rounded-md text-center text-[#FE0B0B] cursor-pointer">
                  Deactivate car
                </div>
              </div>
            </section>
          )}
        </div>
        <hr className="text-N9 hidden sm:block md:hidden lg:block" />
        <span className="text-xs font-normal text-N3">
          Car ID : LF123456789
        </span>
        <hr className="text-N9 hidden sm:block md:hidden lg:block" />
        <div className="flex gap-1.5 items-center">
          <img src={money} />
          <span className="text-xs md:text-sm lg:text-base text-N3 font-semibold">
            ₹ 200
          </span>
          <span className="text-xs">/ hour</span>
          <span className="text-xs text-[#0B970E]">On Rent</span>
        </div>
        <hr className="text-N9 hidden sm:block md:hidden lg:block" />
        <div className="flex justify-between flex-col sm:flex-row md:flex-col lg:flex-row gap-2">
          <span className="text-xs  md:text-sm text-N4">
            Number of Bookings : 2
          </span>
          <span className=" text-xs md:text-base font-semibold">
            This month earnings : 2000
          </span>
        </div>
      </section>
    </div>
  );
}

export default HostCars;
