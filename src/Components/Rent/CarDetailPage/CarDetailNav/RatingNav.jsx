import React from "react";
import filledStar from "../../../../assets/CarDetail/filledStar.svg";
import emptyStar from "../../../../assets/CarDetail/emptystar.svg";
import profile from "../../../../assets/CarDetail/profile.svg";
import more from "../../../../assets/CarDetail/more.svg";
function RatingNav() {
  return (
    <div className="flex flex-col gap-3  sm:gap-4 md:gap-5 lg:gap-6  ">
      <div className="flex gap-2 items-center">
        <p className="font-black text-xl sm:text-2xl md:text-3xl">4.0</p>
        <img className=" size-3 md:size-6 lg:size-7" src={filledStar}></img>
        <span className="font-medium  text-xs sm:text-sm md:text-base text-N3">
          52 Reviews
        </span>
      </div>
      <div className="  grid grid-flow-col  gap-4 overflow-x-scroll  scroll-smooth no-scrollbar">
        <div className="profile flex flex-col p-3 gap-3 text-N3 font-normal text-sm w-80  border-[1px] border-[#dadada] rounded-lg">
          <div className="flex gap-2">
            <img className="size-9" src={profile}></img>
            <div>
              <span className="font-semibold text-sm md:text-base text-N3 text-nowrap">
                Courtney Henry
              </span>
              <div className="flex gap-1  items-center">
                <img src={filledStar}></img>
                <img src={filledStar}></img>
                <img src={filledStar}></img>
                <img src={filledStar}></img>
                <img src={filledStar}></img>
                <span className="font-medium text-xs md:text-sm text-nowrap pl-2">
                  2 mins ago
                </span>
              </div>
            </div>
          </div>

          <span className="text-xs text-[#666666] md:text-sm">
            Consequat velit qui adipisicing sunt do rependerit ad laborum tempor
            ullamco exercitation. Ullamco tempor adipisicing et voluptate duis
            sit esse aliqua
          </span>
        </div>
        <div className="profile flex flex-col p-3 gap-3 text-N3 font-normal text-sm w-80  border-[1px] border-[#dadada] rounded-lg">
          <div className="flex gap-2">
            <img className="size-9" src={profile}></img>
            <div>
              <span className="font-semibold text-sm md:text-base text-N3 text-nowrap">
                Courtney Henry
              </span>
              <div className="flex gap-1 items-center">
                <img src={filledStar}></img>
                <img src={filledStar}></img>
                <img src={filledStar}></img>
                <img src={filledStar}></img>
                <img src={filledStar}></img>
                <span className="font-medium text-sm text-nowrap">
                  2 mins ago
                </span>
              </div>
            </div>
          </div>

          <span className="text-xs text-[#666666] md:text-sm">
            Consequat velit qui adipisicing sunt do rependerit ad laborum tempor
            ullamco exercitation. Ullamco tempor adipisicing et voluptate duis
            sit esse aliqua
          </span>
        </div>
        <div className="profile flex flex-col p-3 gap-3 text-N3 font-normal text-sm w-80  border-[1px] border-[#dadada] rounded-lg ">
          <div className="flex gap-2">
            <img className="size-9" src={profile}></img>
            <div>
              <span className="font-semibold text-sm md:text-base text-N3 text-nowrap">
                Courtney Henry
              </span>
              <div className="flex gap-1 items-center">
                <img src={filledStar}></img>
                <img src={filledStar}></img>
                <img src={filledStar}></img>
                <img src={filledStar}></img>
                <img src={filledStar}></img>
                <span className="font-medium text-sm text-nowrap">
                  2 mins ago
                </span>
              </div>
            </div>
          </div>

          <span className="text-xs text-[#666666] md:text-sm">
            Consequat velit qui adipisicing sunt do rependerit ad laborum tempor
            ullamco exercitation. Ullamco tempor adipisicing et voluptate duis
            sit esse aliqua
          </span>
        </div>
        <div className="profile flex flex-col p-3 gap-3 text-N3 font-normal text-sm w-80  border-[1px] border-[#dadada] rounded-lg">
          <div className="flex gap-2">
            <img className="size-9" src={profile}></img>
            <div>
              <span className="font-semibold text-sm md:text-base text-N3 text-nowrap">
                Courtney Henry
              </span>
              <div className="flex gap-1 items-center">
                <img src={filledStar}></img>
                <img src={filledStar}></img>
                <img src={filledStar}></img>
                <img src={filledStar}></img>
                <img src={filledStar}></img>
                <span className="font-medium text-sm text-nowrap">
                  2 mins ago
                </span>
              </div>
            </div>
          </div>

          <span className="text-xs text-[#666666]">
            Consequat velit qui adipisicing sunt do rependerit ad laborum tempor
            ullamco exercitation. Ullamco tempor adipisicing et voluptate duis
            sit esse aliqua
          </span>
        </div>
      </div>
    </div>
  );
}

export default RatingNav;
