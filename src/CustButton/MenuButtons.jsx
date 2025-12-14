import React from "react";
import UserCircle from "../assets/Menu/UserCircle.svg";
import UserCircleLight from "../assets/Menu/UserCircleLight.svg";
function MenuButtons({ data, type, onClick }) {
  const name = data?.name;
  const img = data?.icon;
  const exit = data?.type;
  const handleLinkClick = () => {
    // Close the menu when clicking the link
    onClick();
  };
  return (
    <div
      key={data?.id}
      className={`flex 
        bg-[#FFFFFF]  hover:bg-v1  items-center text-left  gap-3.5 sm:gap-4 md:gap-5 lg:gap-6 px-4 py-2.5 rounded-lg h-[56px] text-N4  text-xs md:text-sm lg:text-md cursor-pointer`}
      onClick={handleLinkClick}
    >
      <img
        src={img}
        className={` ${
          exit === "host" ? "size-4" : " sm:size-3.5  md:size-4 lg:size-5"
        }`}
      ></img>
      <h3>{name}</h3>
    </div>
  );
}

export default MenuButtons;
