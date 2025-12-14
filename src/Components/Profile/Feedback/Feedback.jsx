import React from "react";
import StarRating from "./StarRating";

function Feedback() {
  return (
    <div className="flex flex-col text-center gap-2.5 sm:gap-3 md:gap-4 border-[1px] border-[#E6E7EA] rounded-lg p-2.5  sm:p-3 md:p-3.5 lg:p-4">
      <h3 className="font-semibold text-base sm:text-sm md:text-lg lg:text-xl text-N2">
        How would you rate the overall user experience of out App?
      </h3>
      <span className="text-xs">Do you find the app easy to use?</span>
      <div className="flex gap-2 justify-around">
        <StarRating />
      </div>
      <div className="text-xs w-full rounded-lg text-center border-[1px] p-2.5 border-[#E6E7EA]">
        Thanks for rating
      </div>
    </div>
  );
}

export default Feedback;
