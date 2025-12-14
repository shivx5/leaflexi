import React, { useEffect, useRef, useState } from "react";
import ExclOffer from "../../../assets/Rent/ExclusiveOffers.svg";
import rightArrow from "../../../assets/Rent/rightarrow.svg";
import leftArrow from "../../../assets/Rent/leftarrow.svg";
import OfferCard from "../../Body/Offer/OfferCard";
import OfferCards from "./OfferCards";
import ExclusiveOfferList from "../../../Utility/ExclusiveOfferList";
function ExclusiveOffers() {
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
    <div className="flex flex-col px-4 sm:px-6 md:px-12 lg:px-24  gap-4 sm:gap-6 md:gap-8 lg:gap-10  pt-10 sm:pt-16 md:pt-24">
      <div className="flex justify-between">
        <div className="flex items-center gap-3  sm:gap-4 md:gap-5 lg:gap-6">
          <h1 className="font-bold  text-sm sm:text-base md:text-lg lg:text-xl text-[#0A0A0A]">
            Exclusive Offers
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
        className="grid grid-flow-col gap-4 overflow-x-scroll scroll-smooth no-scrollbar py-2"
        ref={scrollRef}
      >
        {ExclusiveOfferList?.map((value, key) => {
          return <OfferCards key={value?.id} data={value} />;
        })}
      </div>
    </div>
  );
}

export default ExclusiveOffers;
