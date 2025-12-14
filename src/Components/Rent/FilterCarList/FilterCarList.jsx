import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import FilterList from "../../../Utility/FilterList.js";
import SingleFilter from "./SingleFilter.jsx";
import CarDetail from "../HomeCars/CarDetail.jsx";
import Location from "../../../assets/Rent/location.svg";
import calender from "../../../assets/Rent/calender.svg";
import filter from "../../../assets/CarFilter/filter.svg";
import search from "../../../assets/CarFilter/Search.png";
import RentData from "../RentData/RentData.jsx";
import Pagination from "../../../CustHooks/Pagination/Pagination.jsx";
import Divider from "../../../assets/Rent/VerticalDivider.svg";
import { IoIosClose } from "react-icons/io";

function FilterCarList() {
  const totalNoOfCards = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6,
    6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8,
    8, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9,
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [enableMobileFilter, setEnableMobileFilter] = useState(false);

  const indexofLastItem = currentPage * itemsPerPage;
  const indexofFirstItem = indexofLastItem - itemsPerPage;
  // console.log(currentPage + "clicked");
  const currentItems = totalNoOfCards.slice(indexofFirstItem, indexofLastItem);
  // console.log(currentItems);
  // console.log(FilterList);
  const totalNoOfPages = Math.ceil(totalNoOfCards.length / itemsPerPage);

  // Handle filter selection
  function handleFilter(id) {
    setEnable(id);
  }
  useEffect(() => {
    document.body.style.overflow = enableMobileFilter ? "hidden" : "auto";
  }, [enableMobileFilter]);

  return (
    <div className=" flex flex-col gap-2 md:gap-4">
      <div className=" px-12   justify-center  py-3  sm:py-4  md:py-5 lg:py-6  hidden min-[780px]:flex pt-5 bg-[#F1EDFC]">
        <RentData button={false} from={true} />
      </div>
      <div className="   w-full  justify-centre  flex  min-[779px]:hidden px-4 ">
        <div className="flex items-center   justify-around   border-1 border-[#E4E6E8] rounded-md p-2  bg-[#F1EDFC] w-full">
          <div className="">
            <select id="location" name="location" className="text-sm">
              <option value="anna nagar" name="location">
                Anna Nagar
              </option>
              <option value="anna nagar" name="location">
                Namakkal
              </option>
              <option value="anna nagar" name="location">
                Tamil Nadu
              </option>
              <option value="anna nagar" name="location">
                Chennai
              </option>
            </select>
          </div>
          <img className="h-8" src={Divider} />
          <div className="text-xs  ">22 jun 10pm</div>
          <img className="h-8" src={Divider} />
          <div className="text-xs ">22 jun 10pm</div>
        </div>
      </div>

      {/* Filters and Car Results */}
      <div className="flex flex-col sm:flex-row  sm:gap-6 px-4 sm:px-6 md:px-12 lg:px-24 relative">
        {/* Filters Category */}
        <div className="category flex flex-col w-full sm:w-[40%] md:w-[34%] gap-4   md:shadow-lg rounded-xl  overflow-y-scroll no-scrollbar  scroll-smooth   sm:px-2.5 md:px-3  py-3  sm:py-4  md:py-5 lg:py-6 h-auto sm:h-[65dvh] md:h-3/4 border-[#E8E8E8] sm:border-[1px] ">
          <div className="flex flex-col  gap-1">
            <div className="flex items-center justify-between gap-2">
              <div className="p-2.5 gap-1 sm:gap-1.5  md:gap-2 lg:gap-2.5 flex justify-center items-center border-[1px] sm:border-none rounded-sm border-[#E8E8E8]">
                <img src={filter} />
                <div
                  className="text-[#000000] text-xs md:text-sm font-medium cursor-pointer "
                  onClick={() => {
                    setEnableMobileFilter(!enableMobileFilter);
                    console.log("clicked");
                  }}
                >
                  Filters
                </div>
              </div>
              <div className="text-primary font-bold hidden sm:block cursor-pointer hover:bg-v1 py-2 px-1.5 rounded-md">
                clear
              </div>
              <div className="text-N3 font-normal text-xs md:text-sm px-2 sm:hidden">
                Showing 1 - 12 of 20 results
              </div>
            </div>
            <hr className=" border-[#E8E8E8] hidden sm:block" />
          </div>

          {/* Filter List */}
          <div className="overflow-x-scroll  sm:flex sm:flex-col gap-3 sm:gap-4 no-scrollbar scroll-smooth hidden ">
            {FilterList?.map((values) => (
              <SingleFilter filter={values} key={values.id} />
            ))}
          </div>

          {/* Mobile Filter Overlay */}
          <div
            className={`fixed inset-0 z-50 md:hidden ${
              !enableMobileFilter && "pointer-events-none"
            } `}
          >
            {/* Backdrop */}
            <div
              className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
                enableMobileFilter
                  ? "opacity-50 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setEnableMobileFilter(false)}
            ></div>

            {/* Sliding Drawer */}
            <div
              className={`absolute top-0 left-0 h-full w-2/3 max-w-xs bg-white z-50 p-4 flex flex-col gap-5 transform transition-transform duration-500 ease-in-out ${
                enableMobileFilter ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {/* Header */}
              <div className="flex justify-between items-center">
                <span className="text-sm hover:bg-v1 text-N8 cursor-pointer">
                  clear
                </span>
                <div
                  className="flex justify-end cursor-pointer"
                  onClick={() => setEnableMobileFilter(false)}
                >
                  <IoIosClose className="text-red-500 size-7" />
                </div>
              </div>

              {/* Filter List */}
              <div className="flex flex-col gap-3 no-scrollbar scroll-smooth mt-4 overflow-y-scroll">
                {FilterList?.map((values) => (
                  <SingleFilter filter={values} key={values.id} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Car Filters and Results */}
        <div className="filters-cars flex flex-col w-full gap-4 sm:gap-6">
          {/* Sort and Results */}
          <div className="flex justify-between items-center gap-2">
            <div className="w-full p-2.5 rounded-md  lg:p-3 flex gap-2 items-center justify-center border-[1px] border-[#E5E5E5]">
              <img src={search} className="size-4" />
              <input
                className="w-full focus:outline-none text-xs text-[#aeaeae]"
                placeholder="search for models"
              />
            </div>
            <div className="flex items-center gap-3 sm:gap-4 rounded-md  border-[1px] border-[#E5E5E5] p-2.5  ">
              <span className="text-xs sm:text-sm text-[#818181]">Sort:</span>
              <select
                name="sort by"
                id="cars"
                className="text-xs sm:text-sm  rounded-md   focus:outline-none  "
              >
                <option value="relevant">Relevant</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
                <option value="distance">Distance Near Me</option>
              </select>
            </div>
          </div>
          <div className="text-N3 hidden sm:block font-normal text-xs md:text-sm px-2 ">
            Showing 1 - 12 of 20 results
          </div>

          {/* Car Detail Grid */}
          <div className="grid grid-cols-1 min-[500px]:grid-cols-2  min-[1025px]:grid-cols-3 gap-4 sm:gap-5 md:gap-6 overflow-y-scroll h-[100dvh] no-scrollbar">
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
            <CarDetail />
          </div>
          {/* <div>
            {currentItems?.map((value, key) => {
              return <span>{value}</span>;
            })}
          </div> */}
          <Pagination
            totalNoOfPages={totalNoOfPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
}

// Helper Component: Filter Option (Location)
function FilterOption({ title, icon, content }) {
  return (
    <div className="location flex flex-col rounded-md border border-[#999999] gap-2 py-2 px-3 col-span-1">
      <span className="text-xs ">{title}</span>
      <div className="flex items-center gap-3">
        <img src={icon} className="w-4 " alt={`${title} Icon`} />
        <span className="text-[#333333] text-xs sm:text-sm  line-clamp-1">
          {content}
        </span>
      </div>
    </div>
  );
}

// Helper Component: Date Option (Pickup and Drop Date)
function DateOption({ title, date, time }) {
  return (
    <div className="location flex flex-col rounded-md border border-[#999999] gap-2 py-2 px-3">
      <span className="text-xs ">{title}</span>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3 justify-between">
          <img src={calender} className="w-4" alt="Calendar Icon" />
          <span className="text-xs sm:text-sm ">{date}</span>
        </div>
        <span className="text-[#999999]">|</span>
        <span className="text-xs sm:text-sm ">{time}</span>
      </div>
    </div>
  );
}
// sm:flex-row
export default FilterCarList;
