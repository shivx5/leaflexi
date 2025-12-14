import React, { useState } from "react";
import Explore from "../../../CustButton/Explore";

function Community() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex justify-center  sm:px-6 md:px-12 lg:px-24 py-4 ">
      <div className="w-full  flex flex-col items-center gap-6 sm:gap-8 md:gap-10  bg-[#F1EDFC] border-[1px] rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 border-[#E8E8E8]">
        {/* Heading Section */}
        <div className="flex flex-col  sm:flex-row   gap-3">
          <h2 className="font-bold text-[#0A0A0A] text-xl sm:text-2xl md:text-4xl lg:text-5xl w-full  sm:w-full text-center sm:text-left">
            Stay Updated
          </h2>
          <p className="font-normal  text-[#666666] text-xs sm:text-sm md:text-base lg:text-lg text-center sm:text-left">
            Join our community and be the first to know about exclusive deals,
            new car arrivals, and flexible leasing options.
          </p>
        </div>

        {/* Subscription Form */}
        <form
          className="flex flex-col sm:flex-row items-center gap-3 w-full bg-[#FFFFFF] py-3.5 px-2.5 rounded-lg "
          onSubmit={(e) => {
            e.preventDefault();
            // handleSubscribe(email);
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full sm:flex-1  px-4 rounded-lg border-2  border-none focus:outline-none text-sm md:text-base text-gray-700 transition duration-300 "
          />
          <button
            type="submit"
            className="w-full sm:w-auto flex items-center justify-center h-10 sm:h-10 md:h-12 px-6 rounded-md bg-[#7149E1] hover:bg-[#5a37b5] text-white text-xs md:text-sm lg:text-base font-semibold transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default Community;
