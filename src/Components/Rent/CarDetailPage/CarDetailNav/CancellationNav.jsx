import React from "react";
import glass from "../../../../assets/CarDetail/glass.svg";
function CancellationNav() {
  return (
    <div className="bg-N11  p-4 md:p-6  rounded-lg gap-2.5 flex items-center">
      <img className=" size-8 lg:size-10" src={glass}></img>
      <div className="flex flex-col  text-[#4D4D4D] gap-2 md:gap-1.5">
        <p className="font-semibold text-sm md:text-base ">
          Cancellation Fee: 50% of trip amount or INR 4000 (whichever is lower)
          Until 17 Jul 2025, 03:00 PM
        </p>
        <div className="font-normal text-xs flex flex-col sm:flex-row md:gap-10 gap-0.5">
          <span className="cursor-pointer hover:underline hover:font-semibold">
            Free Cancellation (within 12 hrs)
          </span>
          <span className="cursor-pointer hover:underline hover:font-semibold">
            Partial Refund (within 24 hrs)
          </span>
        </div>
      </div>
    </div>
  );
}

export default CancellationNav;
