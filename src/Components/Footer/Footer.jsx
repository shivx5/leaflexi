import React from "react";
import facebook from "../../assets/Footer/facebook.svg";
import twitter from "../../assets/Footer/x.svg";
import instagram from "../../assets/Footer/instagram.svg";
import linkedin from "../../assets/Footer/github.svg";
import AppLogo from "../../assets/Footer/FooterLogo.svg";
import playstore from "../../assets/Footer/PlayStore.svg";
import FooterNavList from "../../Utility/FooterList";
import FooterList from "./FooterList";
function Footer() {
  return (
    <div className=" bg-[#000000] text-[#cccccf] px-4 sm:px-6 md:px-12 lg:px-24 pt-8      pb-2 sm:pb-4 md:pb-8  lg:pb-10 flex flex-col gap-4 mt-10">
      <div className="flex flex-col gap-6">
        <div>
          {/* <div className=" flex flex-col gap-2  sm:gap-4  md:gap-6 lg:gap-8 ">
            <img src={AppLogo} className=" h-5 sm:h-7 md:h-8  lg:h-10"></img>
            <div className=" flex flex-col gap-3 sm:gap-4 md:gap-5 lag:gap-6 ">
              <span className=" text-xs font-normal w-full text-center md:text-start  md:w-3/4">
                Clarity gives you the blocks and components you need to create a
                truly professional website.
              </span>
              <div className="flex gap-2 justify-center md:justify-start">
                <div className=" flex justify-center">
                  <img
                    src={facebook}
                    className=" size-4 sm:size-5 md:size-6 lg:size-7 "
                  ></img>
                </div>
                <div className=" flex justify-center">
                  <img
                    src={twitter}
                    className="size-4 sm:size-5 md:size-6 lg:size-7 "
                  ></img>
                </div>
                <div className=" flex justify-center">
                  <img
                    src={instagram}
                    className="size-4 sm:size-5 md:size-6 lg:size-7 "
                  ></img>
                </div>
                <div className=" flex justify-center">
                  <img
                    src={linkedin}
                    className="size-4 sm:size-5 md:size-6 lg:size-7"
                  ></img>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col min-[450px]:flex-row flex-wrap justify-between  gap-6 w-full  ">
          {FooterNavList?.map((value, key) => {
            return <FooterList key={value?.id} value={value} />;
          })}
          {/* <div className=" ">
            <div className=" md:p-2 pb-2  lg:p-3 font-medium text-xs sm:text-sm    md:text-base text-[#ffffff]">
              Company
            </div>
            <div className="flex flex-col gap-1 lg:gap-2 text-[#b9b9b9]">
              <span className=" md:p-1.5  lg:p-2.5   text-xs  md:text-sm  ">
                Home
              </span>
              <span className=" md:p-1.5  lg:p-2.5   text-xs  md:text-sm  ">
                About
              </span>
              <span className="gap-1 sm:gap-2  md:p-1.5  lg:p-2.5   text-xs  md:text-sm  ">
                Car Lease
              </span>
              <span className="gap-1 sm:gap-2  md:p-1.5  lg:p-2.5   text-xs  md:text-sm  ">
                Become a Host
              </span>
            </div>
          </div> */}
          {/* Rent */}
          {/* <div className=" ">
            <div className=" md:p-2 pb-2  lg:p-3 font-medium text-xs sm:text-sm    md:text-base text-[#ffffff]">
              Help
            </div>
            <div className="flex flex-col gap-1 lg:gap-2 text-[#b9b9b9]">
              <span className=" md:p-1.5  lg:p-2.5   text-xs  md:text-sm ">
                Customer Support
              </span>
              <span className="md:p-1.5  lg:p-2.5   text-xs  md:text-sm ">
                FAQ's
              </span>
              <span className="md:p-1.5  lg:p-2.5   text-xs  md:text-sm ">
                Terms & conditions
              </span>
              <span className="md:p-1.5  lg:p-2.5   text-xs  md:text-sm ">
                Host Policy
              </span>
            </div>
          </div> */}
          {/* {lease */}
          {/* <div className=" ">
            <div className=" md:p-2 pb-2  lg:p-3 font-medium text-xs sm:text-sm    md:text-base text-[#ffffff]">
              Contact
            </div>
            <div className="flex flex-col gap-1 lg:gap-2 text-[#b9b9b9]">
              <span className=" md:p-1.5  lg:p-2.5   text-xs  md:text-sm">
                Anna Nagar, Chennai
              </span>

              <span className="md:p-1.5  lg:p-2.5   text-xs  md:text-sm">
                +91 9765376237
              </span>
              <span className="md:p-1.5  lg:p-2.5   text-xs  md:text-sm">
                Leaflexi@gmail.com
              </span>
            </div>
          </div> */}
          <div className="flex justify-between min-[450px]:justify-start min-[450px]:flex-col items-center min-[450px]:items-start">
            <div className=" md:p-2 pb-2  lg:p-3 font-medium text-base text-[#ffffff]">
              Install Host App
            </div>
            <div className=" ">
              <img
                src={playstore}
                className="  h-12  md:w-32 lg:w-52 md:h-16  lg:h-20"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="text-[#1E293B]" />
      <div className=" flex justify-between w-full items-center">
        <img src={AppLogo} className=" h-5 sm:h-7 md:h-8  lg:h-10"></img>
        <div className=" flex items-center justify-center">
          <span className="font-normal text-[#a1a1aa] text-[8px] sm:text-xs md:text-sm text-center">
            © Copyright 2025, All Rights Reserved by ClarityUI
          </span>
        </div>
        <div className=" flex flex-col gap-3 sm:gap-4 md:gap-5 lag:gap-6 ">
          {/* <span className=" text-xs font-normal w-full text-center md:text-start  md:w-3/4">
            Clarity gives you the blocks and components you need to create a
            truly professional website.
          </span> */}
          <div className="flex gap-2 justify-center md:justify-start">
            <div className=" flex justify-center">
              <img
                src={facebook}
                className=" size-4 sm:size-5 md:size-6 lg:size-7 "
              ></img>
            </div>
            <div className=" flex justify-center">
              <img
                src={twitter}
                className="size-4 sm:size-5 md:size-6 lg:size-7 "
              ></img>
            </div>
            <div className=" flex justify-center">
              <img
                src={instagram}
                className="size-4 sm:size-5 md:size-6 lg:size-7 "
              ></img>
            </div>
            <div className=" flex justify-center">
              <img
                src={linkedin}
                className="size-4 sm:size-5 md:size-6 lg:size-7"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
