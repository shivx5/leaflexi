import React, { useEffect, useRef, useState } from "react";
import AffCars from "../../../assets/Rent/AffCars.svg";

import HomeCarList from "./HomeCarList";
import rightArrow from "../../../assets/Rent/rightarrow.svg";
import leftArrow from "../../../assets/Rent/leftarrow.svg";
import CarDetail from "./CarDetail";
import navItems from "../../../Utility/NavItemList";
import Arrow from "../../../assets/CarDetail/blueArrow.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";

function HomeCars() {
  const scrollRef = useRef(null);
  const navigate = useNavigate();
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
    <div className="flex flex-col   px-4 sm:px-6 md:px-12 lg:px-24   gap-4 md:gap-8 lg:gap-12 pt-16 ">
      {/* Title & View All */}

      {/* Navigation Tabs & Arrows */}
      <div className="nav flex flex-col items-center justify-center  rounded-lg w-full sm:w-auto mx-auto">
        <div className="flex items-center rounded-2xl bg-[#f4f1fd] p-2   w-full justify-center">
          <div className="flex gap-4 sm:gap-3 md:gap-5 lg:gap-6 text-center  ">
            {(navItems["carrent"] || []).map((value) => (
              <HomeCarList
                key={value.id}
                navItem={value}
                tabActive={activeTab}
                handleTabs={handleActiveTab}
                font="base"
                type="carrent"
              />
            ))}
          </div>

          {/* <div className="flex gap-2 sm:gap-3 md:gap-5 lg:gap-6">
            <img
              src={rightArrow}
              alt="Scroll Left"
              onClick={() => !disableLeft && scroll("left")}
              className={`rotate-180 size-4 sm:size-5 md:size-6 lg:size-7 ${
                disableLeft ? "opacity-30" : "cursor-pointer"
              }`}
            />
            <img
              src={rightArrow}
              alt="Scroll Right"
              onClick={() => !disableRight && scroll("right")}
              className={`size-4 sm:size-5 md:size-6 lg:size-7 ${
                disableRight ? "opacity-30" : "cursor-pointer"
              }`}
            />
          </div> */}
        </div>
        <hr className="border border-[#666666]" />
      </div>

      {/* Car Scrollable Row */}

      <div
        ref={scrollRef}
        className="grid grid-flow-col   space-x-4 overflow-x-scroll scroll-smooth no-scrollbar h-auto py-2"
      >
        <Link to={`/car/1`}>
          <CarDetail type="flex" />
        </Link>
        <Link to={`/car/2`}>
          <CarDetail type="flex" />
        </Link>
        <Link to={`/car/3`}>
          <CarDetail type="flex" />
        </Link>
        <Link to={`/car/4`}>
          <CarDetail type="flex" />
        </Link>

        <Link to={`/car/5`}>
          <CarDetail type="flex" />
        </Link>
      </div>

      <button
        className="flex gap-2 items-center justify-center text-center   w-full"
        onClick={() => {
          navigate("/availablecars");
        }}
      >
        <div className="flex gap-2 w-auto sm:w-36 md:w-44 lg:w-56 p-4 bg-[#F3EBFF] items-center justify-center rounded-lg cursor-pointer h-10">
          <span className="text-primary font-semibold text-xs  sm:text-sm md:text-base">
            view all Cars
          </span>
          <img src={Arrow} className=" size-2.5 md:size-3.5"></img>
        </div>
      </button>
    </div>
  );
}
export default HomeCars;
