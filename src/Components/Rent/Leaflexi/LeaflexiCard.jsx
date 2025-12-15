import React from "react";
import car from "../../../assets/Leaflexi/car.svg";
function LeaflexiCard({ sethoverState, hoverState, data }) {
  const { name, id, desc, icon } = data;
  // console.log(name, id, desc, icon);
  return (
    <div
      id={id}
      className={`flex flex-col p-4 lg:p-5 rounded-xl gap-2   sm:gap-6 md:gap-8 
     border-[#E8E8E8] text-[#666666] transition-all duration-300 ease-in-out w-full min-h-[6rem] sm:min-h-[14rem] lg:min-h-[14.5rem]
    ${
      id === hoverState
        ? "flex-[1.5] h-64 scale-[1.04] bg-primary text-white border-primary z-10"
        : "flex-1 h-full  lg:h-56 bg-white "
    }
  `}
      onMouseEnter={() => {
        sethoverState(id);
      }}
      onMouseLeave={() => {
        sethoverState(null);
      }}
    >
      <img src={icon} className="size-10  md:size-8 lg:size-10" />

      <div className="flex flex-col gap-2">
        <h2
          className={`lg:text-base text-sm font-bold leading-snug ${
            id === hoverState ? "text-white" : "text-black"
          }`}
        >
          {name}
        </h2>
        <p className="text-xs font-normal leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default LeaflexiCard;
