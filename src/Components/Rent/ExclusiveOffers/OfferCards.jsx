import React from "react";
import carImg1 from "../../../assets/Offer/carImg1.png";
import New from "../../../assets/Offer/new.svg";
import Alert from "../../../assets/Offer/Offeralert.svg";
import line from "../../../assets/Offer/line.svg";
function OfferCards({ data }) {
  // console.log(data)
  const { id, type, offer, img, desc, button, brand } = data;

  // console.log(id,type,offer,img,desc,button,brand)
  return (
    <div className="flex p-1.5 md:p-3  gap-3  md:gap-4 lg:gap-5 w-[300px] md:w-[449px] border-1 border-[#f2f2f2] rounded-lg relative h-[120px] min-[640px]:h-[160px]  md:h-[217px] shadow-md">
      <div className="w-1/4  sm:w-28 md:w-32 lg:w-40 h-full sm:h-28   md:h-32 ">
        <img
          src={img}
          className=" w-full h-[70%] sm:h-full rounded-lg object-cover"
        />
      </div>

      <div className="flex flex-col gap-1 md:gap-4 w-3/4">
        <div className="flex flex-col gap-1 md:gap-2">
          {type === "new" && <img src={New} className=" w-6 lg:w-10 h-4" />}
          {type === "special" && (
            <div className="flex justify-between">
              <span className="text-xs md:text-sm lg:text-base font-medium text-N3">
                Summer Special
              </span>
              <img src={Alert} className="w-4 md:w-6"></img>
            </div>
          )}
          <h1 className="font-bold text-sm sm:text-lg md:text-xl lg:text-2xl text-N2">
            {offer}
          </h1>
          {type === "new" && <img src={line} className="w-28" />}
          <span className="font-medium text-xs md:text-sm lg:text-base text-N3">
            {brand}
          </span>
        </div>
        <p className="font-normal text-xs md:text-sm text-[#4c4c4c] line-clamp-1 sm:line-clamp-2">
          Book your first car rental with us and enjoy instant savings on your
          trip
        </p>
      </div>
      <div className="text-primary text-xs  md:text-sm font-bold flex self-end cursor-pointer  absolute bottom-1 right-4">
        {button}
      </div>
    </div>
  );
}

export default OfferCards;
