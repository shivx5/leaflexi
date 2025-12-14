import React from "react";
import phone from "../../../../assets/Rent/phone.svg";
import petrol from "../../../../assets/Rent/petrol.svg";
import automatic from "../../../../assets/Rent/automatic.svg";
import CarImage from "../../../../assets/CarDetail/CarImage.svg";
function CarInfo() {
  return (
    <div className="flex flex-col gap-4">
      <div className="sec-1 flex gap-3 sm:gap-4.5 md:gap-5 lg:gap-6 flex-col">
        <div className="flex  flex-col gap-2.5">
          <p className="font-bold text-base  md:text-xl lg:text-2xl text-N3">
            Toyota Glanza 2024
          </p>
          <span className=" font-[400] text-xs md:text-sm lg:text-base text-N5">
            140 km | extra charge for extra km
          </span>
        </div>
        <div className="flex gap-2.5 md:gap-3.5 lg:gap-4 items-center text-nowrap overflow-x-scroll no-scrollbar scroll-smooth">
          <div className="flex items-center justify-center px-4 py-1.5 bg-N11 rounded-xl gap-1 md:gap-2.5 text-xs text-N3">
            <img src={automatic}></img>
            <span>Fastag</span>
          </div>
          <div className="flex items-center justify-center px-4 py-1.5 bg-N11 rounded-xl gap-1 md:gap-2.5 text-xs text-N3">
            <img src={phone}></img>
            <span>2023</span>
          </div>
          <div className="flex items-center justify-center px-4 py-1.5 bg-N11 rounded-xl gap-1 md:gap-2.5 text-xs text-N3 text-nowrap">
            <img src={phone}></img>
            <span>5 seats</span>
          </div>
          <div className="flex items-center justify-center px-4 py-1.5 bg-N11 rounded-xl gap-1 md:gap-2.5 text-xs text-N3">
            <img src={petrol}></img>
            <span>Petrol</span>
          </div>
          <div className="flex items-center justify-center px-4 py-1.5 bg-N11 rounded-xl gap-1 md:gap-2.5 text-xs text-N3">
            <img src={automatic}></img>
            <span>Automatic</span>
          </div>
        </div>
      </div>
      <div className="sec-2">
        <img src={CarImage}></img>
      </div>
    </div>
  );
}

export default CarInfo;
