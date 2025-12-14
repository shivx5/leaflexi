import React, { useEffect, useRef, useState } from "react";
import Location from "../../../assets/Rent/location.svg";
import Calendar from "../../../assets/Rent/calendar.svg";
import Divider from "../../../assets/Rent/VerticalDivider.svg";
import search from "../../../assets/Rent/search.svg";
import { IoIosArrowDown } from "react-icons/io";

import PickupTime from "./PickUpTime/PickupTime";
import formatFullDate from "./Calender/formatFullDate";
import LocationBox from "./LocationBox/LocationBox";

function RentData({ button = false, from }) {
  const [pickUp, enablePickUp] = useState(false);
  const [drop, enableDrop] = useState(false);
  const [pickUpData, setPickUpData] = useState(null);
  const [dropData, setdropData] = useState(null);
  const [enableLocation, setenableLocation] = useState(false);

  const locationBoxRef = useRef(); // trigger box
  const popupRef = useRef(); // popup

  // Prevent body scroll on calendar/time picker
  useEffect(() => {
    document.body.style.overflow =
      pickUp || drop || enableLocation ? "hidden" : "auto";
  }, [pickUp, drop, enableLocation]);

  // Handle outside click for location popup
  useEffect(() => {
    let timeoutId;

    if (enableLocation) {
      timeoutId = setTimeout(() => {
        const handleClickOutside = (e) => {
          if (
            popupRef.current &&
            !popupRef.current.contains(e.target) &&
            locationBoxRef.current &&
            !locationBoxRef.current.contains(e.target)
          ) {
            setenableLocation(false);
          }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, 0);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [enableLocation]);

  useEffect(() => {
    if (pickUpData !== null) enablePickUp(false);
    if (dropData !== null) enableDrop(false);
  }, [pickUpData, dropData]);

  console.log(pickUpData, dropData);

  return (
    <div
      className={`grid grid-flow-row md:border-1 border-[#e4e6e8] rounded-2xl md:py-5 md:px-5 lg:px-6 gap-2 md:gap-2 bg-[#FFFFFF] ${
        from === true ? "grid-cols-3" : "grid-cols-4"
      }`}
    >
      {/* Location Box */}
      <div
        className={`flex flex-col gap-1.5 md:gap-3 md:border-none border-1 border-[#dadada] rounded-xl p-2.5 cursor-pointer bg-green-400 ${
          from === true
            ? "col-span-1"
            : "col-span-4 sm:col-span-2 md:col-span-1"
        }`}
        onClick={() => setenableLocation(true)}
        ref={locationBoxRef}
      >
        <span className="text-N5 text-sm font-medium">Location</span>
        <div className="flex gap-2 items-center w-full justify-between">
          <div className="flex gap-2">
            <img src={Location} />
            <span className="text-xs md:text-sm font-bold">location</span>
          </div>
          <div>
            <IoIosArrowDown />
          </div>
        </div>
      </div>

      {/* Location Popup */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-200 ease-out ${
          enableLocation ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          ref={popupRef}
          className={`w-[90%] max-w-[360px] sm:max-w-[600px] bg-white p-4 rounded-md shadow space-y-4 no-scrollbar max-h-[600px] transform transition-all duration-300 ease-out ${
            enableLocation ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <LocationBox setenableLocation={setenableLocation} />
        </div>
      </div>

      {/* Pickup Box */}
      <div
        className={`flex flex-col gap-3 md:justify-center items-start md:items-center md:border-none border-1 border-[#dadada] rounded-xl p-2.5 cursor-pointer bg-orange-200 ${
          from === true
            ? "col-span-1"
            : "col-span-4 sm:col-span-2 md:col-span-1"
        }`}
        onClick={() => enablePickUp(true)}
      >
        <span className="text-N5 text-xs md:text-sm font-medium text-nowrap">
          Pickup date and time
        </span>
        <div className="flex gap-2 md:gap-3 items-start md:items-center">
          <img src={Calendar} />
          <div className="text-N2 font-bold text-xs md:text-sm text-nowrap">
            {formatFullDate(pickUpData?.pickupData || dropData?.pickupData)}
            <PickupTime
              enablePickUp={enablePickUp}
              pickUp={pickUp}
              setPickUpData={setPickUpData}
              isPickupDate={true}
            />
          </div>
        </div>
      </div>

      {/* Drop Box */}
      <div
        className={`flex flex-col gap-3 md:justify-center items-start md:items-center cursor-pointer md:border-none border-1 border-[#dadada] rounded-xl p-2.5 bg-red-200 ${
          from === true
            ? "col-span-1"
            : "col-span-4 sm:col-span-2 md:col-span-1"
        }`}
        onClick={() => enableDrop(true)}
      >
        <span className="text-N5 text-xs md:text-sm font-medium text-nowrap">
          Drop date and time
        </span>
        <div className="flex gap-2 md:gap-3 items-start md:items-center">
          <img src={Calendar} />
          <div className="text-N2 font-bold text-xs md:text-sm text-nowrap">
            {formatFullDate(dropData?.dropData || pickUpData?.dropData)}
            <PickupTime
              pickUpData={pickUpData}
              enableDrop={enableDrop}
              drop={drop}
              setdropData={setdropData}
              isPickupDate={false}
            />
          </div>
        </div>
      </div>

      {/* Search Button */}
      {button && (
        <div className="flex justify-center p-1 sm:p-1.5 md:p-2 lg:p-2.5 gap-1 sm:gap-1.5 md:gap-2 lg:gap-2.5 bg-[#7149E1] hover:bg-[#3e287c] font-semibold w-full sm:w-32 md:w-full h-10 md:h-14 rounded-md items-center cursor-pointer mt-4 col-span-4 sm:col-span-2 md:col-span-1 md:col-end-5">
          <img className="size-3.5" src={search} />
          <span className="font-semibold text-[#FAFAFA] text-xs sm:text-sm lg:text-base">
            Search
          </span>
        </div>
      )}
    </div>
  );
}

export default RentData;
