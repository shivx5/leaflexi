import React, { useState } from "react";

import profile from "../../../assets/Profile/profilePic.svg";
import MyProfile from "./MyProfile";
import MyTrips from "../MyTrips/MyTrips";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import FAQ from "../../Body/FAQ/FAQ";
import Support from "../Support/Support";
import ProfileList from "../../../Utility/ProfileList";
import SavedCars from "../SavedCars/SavedCars";
import HostEarnings from "../HostProfile/HostEarnings/HostEarnings";
import HostCars from "../HostProfile/HostCars/HostCars";
import { id } from "date-fns/locale/id";
function Profile() {
  const [selectedProfile, setSelectedProfile] = useState(0);
  const navigate = useNavigate();

  return (
    <div className=" px-4 sm:px-8 md:px-12 lg:px-24  ">
      <div className="flex flex-col min-[800px]:flex-row gap-3 sm:gap-3.5 md:gap-5 lg:gap-6 py-4 sm:py-6 md:py-8 lg:py-12">
        <div className=" p-4 md:p-2.5 lg:p-3 border border-[#E8E8E8]   flex flex-col gap-3  sm:gap-3.5  md:gap-4 lg:gap-6 w-full min-[800px]:w-1/2 lg:w-1/4 rounded-lg   h-full min-[800px]:h-[60dvh]">
          <div className="flex flex-col items-center justify-center ">
            <img src={profile} className=" size-12 md:size-16 lg:size-24"></img>
            <p className="font-semibold  text-sm md:text-base text-[#1a1a1a]">
              User A
            </p>
            <p className="font-normal text-N4 text-xs">User@gmail.com</p>
          </div>
          <div className="flex min-[800px]:flex-col justify-around text-nowrap gap-1">
            {ProfileList["user"]?.data?.map((data, key) => {
              return (
                <Link to={`/profile/${data?.gotoLink}`} key={data?.id}>
                  <div
                    key={data?.id}
                    onClick={() => {
                      setSelectedProfile(data?.id);
                    }}
                    className={`flex items-center p-2.5 sm:p-3 md:p-3.5 lg:p-4 gap-1.5  sm:gap-2.5 md:gap-3 lg:gap-3.5 rounded-md cursor-pointer text-N5  ${
                      selectedProfile === data?.id
                        ? "bg-v2 text-[#664896]"
                        : "hover:bg-v1"
                    } ${key === 3 && "hidden md:flex"}`}
                  >
                    <img className="size-3 md:size-4" src={data?.icon}></img>
                    <p className=" text-xs">{data?.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className=" w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Profile;
//  <div
//                   key={data?.id}
//                   className={`flex items-center p-2.5 sm:p-3 md:p-3.5 lg:p-4 gap-1.5  sm:gap-2.5 md:gap-3 lg:gap-3.5 rounded-md cursor-pointer text-N5  ${
//                     selectedProfile === data?.id
//                       ? "bg-v2 text-[#664896]"
//                       : "hover:bg-v1"
//                   } ${key === 3 && "hidden md:flex"}`}
//                   onClick={() => {
//                     setSelectedProfile(data?.id);
//                   }}
//                 >
//                   <img className="size-3 md:size-4" src={data?.icon}></img>
//                   <p className=" text-xs">{data?.name}</p>
//                 </div>
