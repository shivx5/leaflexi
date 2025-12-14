import React, { useState } from "react";
import LeaflexiCard from "./LeaflexiCard";
import LeaflexiCardList from "../../../Utility/LeaflexiCardList";

function Leaflexi() {
  const [hoverState, sethoverState] = useState(2);

  return (
    <div className="pt-10 sm:pt-16 md:pt-24">
      <div className="sm:pl-8 lg:pl-24 flex sm:flex-row flex-col justify-between sm:gap-4">
        {/* Left Text Section */}
        <div className="w-full sm:w-[40%] flex flex-col text-center sm:text-left gap-4 sm:gap-8 md:gap-10 lg:gap-14 py-6 sm:py-8 md:py-10 lg:py-14 justify-center items-center">
          <div className="flex flex-col gap-6 md:gap-8 w-full text-[#000000]">
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-5xl">
              Why Leaflexi
            </h1>
            <p className="font-normal text-xs sm:text-sm md:text-base text-[#666666] px-2">
              Drive More, Worry Less — Affordable rentals, flexible options, and
              zero hassle—just grab the keys and go.
            </p>
          </div>
          <div className="flex w-[95%] items-center justify-center sm:justify-start">
            <button className="p-2.5 flex items-center justify-center w-36 bg-primary rounded-md text-N12 text-xs md:text-sm lg:text-base">
              Explore Cars
            </button>
          </div>
        </div>

        {/* Right Card Section */}
        <div className="bg-[#1D0D4B] w-full sm:w-[90%] rounded-r-3xl sm:rounded-r-none rounded-l-3xl relative p-4 md:p-6">
          <div className="w-full max-w-[1320px] mx-auto h-full transition-all duration-300">
            {/* Flex layout for large screens */}
            <div className="hidden min-[1300px]:flex gap-4 h-full justify-center items-center">
              {LeaflexiCardList.map((card) => (
                <LeaflexiCard
                  key={card.id}
                  data={card}
                  isFlex={true}
                  hoverState={hoverState}
                  sethoverState={sethoverState}
                />
              ))}
            </div>

            {/* Grid layout for small & mid screens */}
            <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-4 min-[1300px]:hidden">
              {LeaflexiCardList.map((card) => (
                <LeaflexiCard key={card.id} data={card} isFlex={false} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaflexi;
