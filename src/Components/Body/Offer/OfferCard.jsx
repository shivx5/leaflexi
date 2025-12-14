import React from "react";

function OfferCard({ CardOfferData }) {
  // console.log(CardOfferData)

  const Title = CardOfferData?.title;
  const desc1 = CardOfferData?.desc1;
  const desc2 = CardOfferData?.desc2;
  const PlanPrice = CardOfferData?.planPrice;
  // lg:gap-[50px] sm:gap-[40px] gap-[10px]
  // w-full sm:w-[47%] md:w-[48%]lg:w-[49%]
  return (
    <div className=" flex flex-col  justify-between  p-5 sm:p-6 md:p-8    rounded-3xl lg:p-10   bg-[#F4F4F4]  lg:gap-14 md:gap-12 sm:gap-8 gap-4">
      {/* ------------------------------------------- */}

      <h3 className="lg:text-4xl text-2xl sm:text-3xl   font-[700] text-[#0A0A0A]">
        {Title}
      </h3>

      <div className="flex flex-col lg:gap-7 md:gap-6 sm:gap-5 gap-4">
        <div className="flex flex-col lg:gap-3 gap-1 ">
          <p className="sm:text-base  text-sm  font-[800]  text-[#4D4D4D]">
            {desc1}
          </p>
          <p className="text-[#4D4D4D] sm:text-sm text-xs  font-[400] line-clamp-5 sm:line-clamp-2 ">
            {desc2}
          </p>
        </div>
        <div className=" flex lg:gap-2.5 md:gap-2 sm:gap-1.5 gap-1 items-end">
          <span className=" text-[#4D4D4D] font-[800] text-xs md:text-sm lg:text-base">
            {" "}
            Plan Starts at just
          </span>
          <span className=" text-xl sm:text-2xl  md:text-3xl lg:text-[2.5rem] text-[#909090] b3 font-[800] ">
            {" "}
            {PlanPrice}
          </span>
        </div>
      </div>
      <button
        className=" rounded-[8px]  text-[#FAFAFA] w-1/3
         sm:w-1/3  lg:px-8 md:px-2 sm:px-1 px-0.5  py-2 sm:py-3  md:py-3.5 lg:py-4 text-center b3 lg:text-base md:text-sm text-xs bg-[#909090]"
      >
        Explore
      </button>
    </div>
  );
}

export default OfferCard;

{
  /* <div className=' flex lg:gap-[24px] gap-[12px] flex-col'>
<div className='flex flex-col lg:gap-[12px] gap-[6px] bg-red-200'>
  <p className='text-[16px]   font-[800] leading-[20.83px] text-[#4D4D4D]'>{desc1}</p>
  <p className='text-[#4D4D4D] text-[14px] font-[400] leading-[18.23px] b2reg'>{desc2}</p>
</div>


</div> */
}
