import React from "react";
import key from "../../../assets/Lease/key.jpg";
function LeasePlan() {
  return (
    <div
      className="flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-14 px-4  sm:px-8  md:px-12 lg:px-24 py-4 sm:py-8  md:py-10 lg:py-14 backgroundImageGradient ;
"
    >
      <div className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-N12">
        Leasing a car?
      </div>
      <div className="flex flex-col min-[500px]:flex-row gap-3 justify-between">
        <div className="flex flex-col gap-1 sm:gap-2 md:gap-2.5 lg:gap-3 ">
          <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#e5e5e5]">
            1 to 6 years
          </p>
          <p className="text-[#e5e5e5] text-sm sm:text-base  md:text-lg lg:text-xl">
            Long-term, cost-effective plans
          </p>
        </div>
        <div className="font-normal text-[#e5e5e5] text-xs md:text-sm flex w-full min-[500px]:w-[50%] ">
          <p className="line-clamp-5">
            A long-term (1–6 years) vehicle agreement with fixed monthly
            payments, ideal for regular use without ownership. Car leasing
            allows customers to use a vehicle for a fixed period by paying
            monthly rentals instead of purchasing it. It offers flexibility in
            choosing a car, upgrading options, and includes maintenance
            services. At the end of the lease term, users can return, renew, or
            purchase the vehicle.
          </p>
        </div>
      </div>
      <div>
        <img src={key} className="rounded-xl w-full"></img>
      </div>
    </div>
  );
}

export default LeasePlan;
