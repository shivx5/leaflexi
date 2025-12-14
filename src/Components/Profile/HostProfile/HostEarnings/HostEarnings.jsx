import React from "react";

function HostEarnings() {
  return (
    <div className="flex flex-col w-full ">
      <h3 className="font-bold text-xl  sm:text-2xl  md:text-3xl lg:text-4xl text-N3">
        Earnings
      </h3>
      <div className="flex gap-2 sm:gap-2.5  lg:gap-3  p-3 bg-[#F7F7F7] rounded-md">
        <div className="   h-[111px] w-[130px]  bg-gray-200 rounded-sm"></div>
        <div className="flex flex-col gap-1  lg:gap-2 w-full">
          <div className="bg-[#D3C7F6]  text-xs md:text-sm p-1 flex justify-left items-center rounded-sm  text-nowrap w-[176px]">
            Booking Id : LF123456789
          </div>
          <hr className=" text-[#DADADA]" />
          <span className="text-xs md:text-sm p-1 flex justify-left items-center text-green-500">
            Last Earned
          </span>
          <hr className=" text-[#DADADA]" />

          <div className="flex justify-start  sm:justify-between  text-xs md:text-sm p-1   flex-col sm:flex-row gap-1.5">
            <span>Vehicle No : KA1234</span>
            <span>Credited: rs 2000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HostEarnings;
