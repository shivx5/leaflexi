import React, { useState } from "react";
import trip from "../../../assets/Profile/trips.svg";
import SingleTrip from "./SingleTrip";
import TripList from "../../../Utility/TripList";
import Search from "../../../assets/Profile/Search.svg";
function MyTrips() {
  const [selectedList, setSelectedList] = useState(0);
  const [tripName, setTripName] = useState("");

  function handleSelectedList(index) {
    setSelectedList(index);
  }

  // console.log(selectedList);

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          My trips
        </h2>
        <div className="flex justify-between border-[1px] rounded-md p-1 border-[#dadada] text-nowrap space-x-2">
          {TripList?.map((data, key) => {
            return (
              <div
                className={`px-2 md:px-4 rounded-md py-2 sm:py-2.5 md:py-3.5 flex-1 flex items-center justify-center gap-1.5 md:gap-3 cursor-pointer ${
                  selectedList === data?.id
                    ? "bg-v2 text-[#664896]"
                    : "hover:bg-v1 text-[#666666]"
                }`}
                key={data?.id}
                onClick={() => {
                  handleSelectedList(data?.id);
                  setTripName(data?.type);
                }}
              >
                <p className="font-normal md:font-medium text-xs ">
                  {data?.type}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* {tripName === "Past Trips" && (
        <div className="flex  justify-between items-center gap-6 sm:gap-4 mb-6">
          <div className="flex gap-2 border-[1px] rounded-sm px-2 py-1 sm:py-2.5 border-[#DCDFE2] w-full sm:w-[40%]">
            <img src={Search} className="size-6" alt="search" />
            <input
              type="text"
              className="border-none outline-none w-full sm:w-auto text-xs sm:text-sm"
              placeholder="Search"
            />
          </div>
          <div className="flex items-center gap-2 justify-end w-full sm:w-auto">
            <p className="text-sm">Sort</p>
            <select className="rounded-sm px-3 py-2 text-sm border-[1px] border-[#b2b2b2] cursor-pointer w-full sm:w-auto outline-none">
              <option value="All">All</option>
              <option value="Recent">Recent</option>
              <option value="Trip Completed">Trip Completed</option>
              <option value="Trip Cancelled">Trip Cancelled</option>
            </select>
          </div>
        </div>
      )} */}

      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
        {TripList?.length === 0 ? (
          <div className="text-center text-xl text-gray-500">
            No trips available.
          </div>
        ) : (
          TripList[selectedList]?.data?.map((data, key) => (
            <SingleTrip data={data} key={data?.bookingId} tripName={tripName} />
          ))
        )}
      </div>
    </div>
  );
}

export default MyTrips;
