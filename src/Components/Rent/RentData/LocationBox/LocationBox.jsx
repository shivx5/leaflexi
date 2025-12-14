import React from "react";
import search from "../../../../assets/CarFilter/Search.png";
import Location from "../../../../assets/Rent/location2.svg";
import currentlocation from "../../../../assets/Rent/currentlocation.png";

function LocationBox({ setenableLocation }) {
  return (
    <>
      <div className="p-2 border-[1px] border-[#dadada] rounded-full text-xs text-[#666666] cursor-pointer">
        <div className="flex  gap-2 items-center">
          <img src={search} className="size-4" />
          <input
            type="text"
            placeholder="Search your location"
            className="w-full outline-none"
          />
        </div>
      </div>
      <div className="flex gap-2 items-center cursor-pointer">
        <img src={currentlocation} className="size-3.5" />
        <p className="text-sm font-semibold">Use your current location</p>
      </div>
      {/* <div className="text-sm font-semibold flex flex-col gap-2">
        <span>Recent Searches</span>
        <div className="text-center text-xs font-normal">
          No recent searches
        </div>
      </div> */}
      <div className="flex flex-col gap-2 py-4">
        <div className="font-semibold text-sm">Suggesition</div>
        <div className="overflow-y-scroll scroll-smooth no-scrollbar flex flex-col gap-2 h-[200px] py-1">
          {[
            "Anna Nagar, Chennai, 635123",
            "Anna Nagar, Chennai, 635123",
            "Anna Nagar, Chennai, 635123",
            "Anna Nagar, Chennai, 635123",
            "Anna Nagar, Chennai, 635123",
            "Anna Nagar, Chennai, 635123",
            "Anna Nagar, Chennai, 635123",
            "Anna Nagar, Chennai, 635123",
            "Anna Nagar, Chennai, 635123",
            "Anna Nagar, Chennai, 635123",
          ].map((city, idx) => (
            <div
              key={idx}
              className="p-2 cursor-pointer hover:bg-v1 rounded-md capitalize flex gap-2 items-center text-sm"
              onClick={() => {
                setenableLocation(false);
                // you can also set selected city if needed
              }}
            >
              <img src={Location} className="size-3" />
              {city}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default LocationBox;
