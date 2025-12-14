import React, { useEffect, useRef, useState } from "react";

function HomeCarList({ navItem, handleTabs, tabActive, font, type }) {
  function handleActiveTab(index) {
    handleTabs(index);
  }
  const img = navItem?.img;
  const name = navItem?.name;
  const navId = navItem?.id;
  const activeImg = navItem?.activeImg;

  return (
    <div
      onClick={() => handleActiveTab(navId)}
      id={navId}
      className={`flex flex-col cursor-pointer p-0.5 sm:p-1.5 md:p-2 lg:p-2.5 gap-1 md:gap-2 justify-center   items-center size-12 sm:size-16 md:size-20 lg:size-24  ${
        tabActive == navId
          ? "bg-primary rounded-md sm:rounded-lg md:rounded-xl lg:rounded-2xl "
          : "border-none"
      }`}
    >
      <img
        src={tabActive == navId ? activeImg : img}
        className={` size-4 sm:size-5 lg:size-6  ${
          tabActive == navId ? "" : null
        }`}
      ></img>

      <span
        className={` text-[10px] text-nowrap w-full  md:text-sm lg:text-base ${
          tabActive == navId ? " font-medium text-white" : "text-[#000000] "
        }`}
      >
        {name}
      </span>
    </div>
  );
}

export default HomeCarList;
