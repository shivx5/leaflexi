import React from "react";
import profilePic from "../../../assets/Profile/profilePic.svg";
function MyProfile() {
  return (
    <div className="flex flex-col gap-4 lg:gap-6 ">
      <div className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-N3">
        My Profile
      </div>
      <div className="flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-4">
        <img
          src={profilePic}
          className="size-12 md:size-16 lg:size-20 mt-2"
        ></img>
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-6 w-full">
          <div className="w-full  flex flex-col gap-2">
            <p className="font-medium text-xs md:text-sm text-N2">User Name</p>
            <input className=" border-[1px] border-N8 w-full rounded-lg h-8  md:h-9 lg:h-11  p-1 sm:p-2 md:p-2.5 lg:p-3 outline-none text-xs text-N8" />
          </div>
          <div className="flex gap-4 ">
            <div className="flex flex-col gap-2 w-full sm:w-[30%]">
              <p className="font-medium text-xs md:text-sm text-N2">Contact</p>
              <input className=" border-[1px] border-N8 w-full rounded-lg h-8  md:h-9 lg:h-11  p-1 sm:p-2 md:p-2.5 lg:p-3 outline-none text-xs text-N8" />
            </div>
            <div className="flex flex-col gap-2 w-full sm:w-[30%]">
              <p className="font-medium text-xs md:text-sm text-N2">Email</p>
              <input className="border-[1px] border-N8 w-full rounded-lg h-8  md:h-9 lg:h-11  p-1 sm:p-2 md:p-2.5 lg:p-3 outline-none text-xs text-N8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
