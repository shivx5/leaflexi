import React, { useEffect, useRef, useState } from "react";
import ExclOffer from "../../../assets/Rent/ExclusiveOffers.svg";
import rightArrow from "../../../assets/Rent/rightarrow.svg";
import leftArrow from "../../../assets/Rent/leftarrow.svg";
import CarDetail from "../HomeCars/CarDetail";
import Arrow from "../../../assets/CarDetail/BlueArrow.svg";
import { useNavigate } from "react-router-dom";

function AffordableCar() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [disableLeft, setDisableLeft] = useState(false);
  const [disableRight, setDisableRight] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8; // responsive scroll amount
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      requestAnimationFrame(checkScroll);
    }
  };

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setDisableLeft(scrollLeft <= 0);
      setDisableRight(scrollLeft + clientWidth >= scrollWidth - 20);
    }
  };

  const handleActiveTab = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
    }
    return () => {
      if (ref) ref.removeEventListener("scroll", checkScroll);
    };
  }, []);
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 flex  gap-4 md:gap-5 lg:gap-6 flex-col   md:pt-12 ">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3  sm:gap-4 md:gap-5 lg:gap-6">
          <h1 className="font-bold  text-sm sm:text-base md:text-lg lg:text-xl  text-[#0A0A0A]">
            Affordable Cars
          </h1>
        </div>
        <div className="flex gap-2 sm:gap-3 md:gap-5 lg:gap-6">
          <img
            src={rightArrow}
            alt="Scroll Left"
            onClick={() => !disableLeft && scroll("left")}
            className={`rotate-180 size-6 md:size-7 ${
              disableLeft ? "opacity-30" : "cursor-pointer"
            }`}
          />
          <img
            src={rightArrow}
            alt="Scroll Right"
            onClick={() => !disableRight && scroll("right")}
            className={`size-6 md:size-7 ${
              disableRight ? "opacity-30" : "cursor-pointer"
            }`}
          />
        </div>
      </div>
      <div
        ref={scrollRef}
        className="grid grid-flow-col gap-4  space-x-3.5 overflow-x-scroll scroll-smooth no-scrollbar py-2"
      >
        <CarDetail type="flex" />
        <CarDetail type="flex" />
        <CarDetail type="flex" />
        <CarDetail type="flex" />
        <CarDetail type="flex" />
      </div>
      <div className="flex gap-2 items-center justify-center text-center   w-full">
        <button
          className="flex gap-2 w-auto sm:w-36 md:w-44 lg:w-56 p-2.5 bg-[#F3EBFF] items-center justify-center rounded-lg cursor-pointer"
          onClick={() => {
            navigate("/availablecars");
          }}
        >
          <span className="text-primary font-semibold text-xs  sm:text-sm md:text-base">
            view all cars
          </span>
          <img src={Arrow} className=" size-2.5 md:size-3.5"></img>
        </button>
      </div>
    </div>
  );
}

export default AffordableCar;
