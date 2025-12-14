import React from "react";
import card from "../../../assets/Payment/card.svg";

function TransactionCardDetails() {
  return (
    <div className=" p-4 border rounded-xl shadow-sm border-[#dadada] flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
      <h2 className="text-sm md:text-base font-bold ">Transaction details</h2>
      <div className="grid grid-cols-3 items-center">
        <div className="text-N5 font-normal text-xs px-2 md:px-4  py-1.5 md:py-3 gap-1.5 md:gap-2.5">
          Transaction ID
        </div>
        <div className="col-span-2 px-2 md:px-4  py-1.5 md:py-3 gap-1.5 md:gap-2.5 text-N3 text-xs md:text-sm  ">
          LF123456789
        </div>

        <div className=" text-N5 font-normal text-xs px-2 md:px-4  py-1.5 md:py-3 gap-1.5 md:gap-2.5">
          Transaction date
        </div>
        <div className="col-span-2 px-2 md:px-4  py-1.5 md:py-3 gap-1.5 md:gap-2.5 text-N3 text-xs md:text-sm ">
          11 Feb, 10:00 AM
        </div>

        <div className=" text-N5 font-normal text-xs px-2 md:px-4  py-1.5 md:py-3 gap-1.5 md:gap-2.5">
          Payment Method
        </div>
        <div className="col-span-2 px-2 md:px-4  py-1.5 md:py-3 gap-1.5 md:gap-2.5 text-N3 text-xs md:text-sm ">
          <div className="flex gap-2">
            <img src={card}></img>
            <p>123 *** *** ***225</p>
          </div>
        </div>

        <div className=" text-N5 font-normal text-xs px-2 md:px-4  py-1.5 md:py-3 gap-1.5 md:gap-2.5">
          Amount
        </div>
        <div className="col-span-2 px-2 md:px-4  py-1.5 md:py-3 gap-1.5 md:gap-2.5 text-N3 text-xs md:text-sm ">
          $5000
        </div>

        <div className=" text-N5 font-normal text-xs px-2 md:px-4  py-1.5 md:py-3 gap-1.5 md:gap-2.5">
          Service fee
        </div>
        <div className="col-span-2 px-2 md:px-4  py-1.5 md:py-3 gap-1.5 md:gap-2.5 text-N3 text-xs md:text-sm  ">
          $500
        </div>

        <div className=" text-N5 font-normal text-xs px-2 md:px-4  py-1.5 md:py-3 gap-1.5 md:gap-2.5">
          Tax
        </div>
        <div className="col-span-2 px-2 md:px-4  py-1.5 md:py-3 gap-1.5 md:gap-2.5 text-N3 text-xs md:text-sm ">
          $0
        </div>
        <div className="  text-[#000000] text-xs px-2 md:px-4  py-1.5 md:py-3 gap-1.5 md:gap-2.5 font-semibold">
          Total amount
        </div>
        <div className="col-span-2 font-semibold px-2 md:px-4  py-1.5 md:py-3 gap-1.5 md:gap-2.5 text-[#000000] text-xs md:text-sm ">
          $5,550
        </div>
      </div>
    </div>
  );
}

export default TransactionCardDetails;
