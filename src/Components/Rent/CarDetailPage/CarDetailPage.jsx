import React, { useEffect, useRef, useState } from "react";
import navItems from "../../../Utility/NavItemList";
import AffordableNavList from "../HomeCars/HomeCarList";
import CarDetail from "../HomeCars/CarDetail";
import LocationNav from "./CarDetailNav/LocationNav";
import CancellationNav from "./CarDetailNav/CancellationNav";
import FeaturesNav from "./CarDetailNav/FeaturesNav";
import FAQ from "../../Body/FAQ/FAQ";
import FAQCard from "../../Body/FAQ/FAQCard";
import FAQNav from "./CarDetailNav/FAQNav";
import ConditionNav from "./CarDetailNav/ConditionNav";
import RatingNav from "./CarDetailNav/RatingNav";
import CarInfo from "./CarInfo/CarInfo";
import CarDetailNavList from "./DarDetailNavList/CarDetailNavList";
import CarDetailsNavList from "../../../Utility/CarDetailsNavList.js";
import Carprice from "./CarPrice/Carprice.jsx";
import {
  data,
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import CarDetailNavService from "./CarDetailNav/CarDetailNavService.jsx";
import useAuth from "../../../Authentication/useAuth.jsx";
function CarDetailPage() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef(null);
  const [disableLeft, setDisableLeft] = useState(false);
  const [disableRight, setDisableRight] = useState(true);
  const carPriceRef = useRef(null);
  const [hideMobileBuy, setHideMobileBuy] = useState(false);

  // Scroll using buttons
  const scroll = (direction) => {
    // console.log(direction);

    if (scrollRef.current) {
      const scrollAmount = 200;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(() => {
        checkScroll();
      }, 100);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideMobileBuy(entry.isIntersecting); // Hide when `Carprice` is in view
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // adjust if needed
      }
    );

    if (carPriceRef.current) {
      observer.observe(carPriceRef.current);
    }

    return () => {
      if (carPriceRef.current) observer.unobserve(carPriceRef.current);
    };
  }, []);

  useEffect(() => {
    checkScroll();
  }, []);

  const checkScroll = () => {
    // console.log(scrollRef.current);
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      // console.log(scrollLeft, scrollWidth, clientWidth);
      setDisableLeft(scrollLeft <= 0);
      setDisableRight(scrollLeft + clientWidth >= scrollWidth - 90);
      // console.log(disableLeft, disableRight);
    }
  };
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]); // Only scroll when the car ID changes

  function handleActiveTab(index) {
    setActiveTab(index);
  }
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24  sm:flex sm:gap-2.5 md:gap-3.5 lg:gap-8 relative">
      <div className="flex gap-3 sm:gap-3.5 md:gap-4 lg:gap-5 flex-col w-full sm:w-[55%] lg:w-[60%] ">
        <CarInfo />
        <div className="sec-3 flex flex-col gap-4 sm:gap-5  md:gap-6 lg:gap-8 ">
          <div className="nav-links flex  gap-2.5 sm:gap-4 md:gap-5 lg:gap-6 overflow-x-scroll no-scrollbar scroll-smooth ">
            {CarDetailsNavList?.map((value, key) => {
              return (
                <div key={value?.id}>
                  <CarDetailNavList
                    setActiveTab={setActiveTab}
                    activeTab={activeTab}
                    navItem={value}
                    key={value.id}
                    id={value.id}
                    font="xs"
                  />
                </div>
              );
            })}
          </div>
          <CarDetailNavService id={activeTab} />

          {/* route to respected nav links */}
          {/* <Outlet /> */}

          <div className=" text-base sm:text-md md:text-lg lg:text-xl font-bold flex flex-col gap-3.5 sm:gap-4  md:gap-5 lg:gap-6 ">
            <div>Similar Cars</div>
            <div
              ref={scrollRef}
              className=" grid grid-flow-col  overflow-x-scroll gap-4 no-scrollbar"
            >
              <CarDetail type="flex" />
              <CarDetail type="flex" />
              <CarDetail type="flex" />
              <CarDetail type="flex" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full block">
        <div ref={carPriceRef} className="sm:sticky sm:top-10">
          <Carprice />
        </div>
      </div>

      {!hideMobileBuy && (
        <div className="w-full sm:hidden h-12 flex items-center justify-center fixed bottom-0 left-0 z-30 bg-primary">
          <button className=" text-white font-semibold  text-base w-full text-center py-3">
            Book Now
          </button>
        </div>
      )}
    </div>
  );
}

export default CarDetailPage;
