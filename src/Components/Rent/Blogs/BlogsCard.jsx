import React from "react";
import car from "../../../assets/Question/car.jpg";
import arrow from "../../../assets/Blogs/arrow.svg";
function BlogsCard() {
  return (
    <div className=" w-full min-w-[295px] max-w-[328px] h-auto flex flex-col justify-between  rounded-lg shadow-md ">
      <div className="w-full h-auto">
        <img src={car} className="rounded-t-xl w-full h-auto"></img>
      </div>
      <div className="p-4 flex flex-col gap-3 w-full">
        <span className="font-semibold  text-xs md:text-sm text-primary">
          Design
        </span>
        <div className="flex flex-col gap-1.5 md:gap-3  w-full">
          <div className="flex justify-between w-full">
            <h4 className="text-[#101828] font-semibold text-base sm:text-lg md:text-xl lg:text-2xl ">
              UX review Presentations
            </h4>
            <img src={arrow} />
          </div>

          <p className="text-[#666666]   w-full font-normal text-xs md:text-sm   ">
            How do you create compelling presentations that wow your colleagues
            and impress your managers?
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogsCard;
