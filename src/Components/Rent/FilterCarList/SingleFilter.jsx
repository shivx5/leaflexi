import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function SingleFilter({ filter }) {
  const [enable, setEnable] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640); // sm = 640px

  const name = filter?.name;
  const id = filter?.id;
  const type = filter?.type;
  const list = filter?.list;
  const desc = filter?.desc;
  const values = filter?.values;
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth > 640;
      setIsMobile(mobile);
      if (!mobile) {
        setEnable(true); // Always show on desktop
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className=" rounded-lg flex flex-col  gap-0.5 sm:gap-1.5  md:gap-2.5 lg:gap-4  ">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <div
            onClick={() => {
              setEnable(!enable);
            }}
            // w-[6rem]  sm:w-[12rem] md:w-[14rem] lg:w-[17rem]
            className="flex text-nowrap px-1.5 sm:px-2 md:px-2.5 lg:px-3 py-1 justify-between items-center  sm:py-1.5 md:py-2 lg:py-2.5 gap-1.5  md:gap-2 cursor-pointer rounded-md "
          >
            <div className=" font-semibold text-xs sm:text-sm md:text-base lg:text-lg text-[#000000]">
              {name}
            </div>
            <span className="">
              {!enable ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            {enable &&
              type === "checkbox" &&
              list?.map((values, key) => {
                return (
                  <div className="label flex gap-2 sm:gap-2.5 md:gap-3.5 lg:gap-4 items-start  p-1.5 sm:p-2 md:p-2.5 lg:p-3">
                    <input
                      type="checkbox"
                      className=" size-3.5 md:size-4.5 lg:size-6 border-[1.5px] rounded-[4px]"
                    />
                    <div className="flex flex-col gap-[4px] md:gap-[6px] text-[#4D4D4D]">
                      <h1 className="font-semibold text-xs md:text-sm  lg:text-base ">
                        {values?.title}
                      </h1>
                      {values?.desc && (
                        <span className="  text-xs">
                          Extra charge will be added for this
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            {enable && type === "range" && (
              <div className="flex flex-col gap-2 sm:gap-2.5 md:gap-3.5 lg:gap-4  p-1.5 sm:p-2 md:p-2.5 lg:p-4">
                <div className="flex justify-between">
                  <span className="text-xs  md:text-sm">{values?.min}</span>
                  <span className="text-xs  md:text-sm">{values?.max}</span>
                </div>
                <input
                  type="range"
                  max={values?.max}
                  min={values?.min}
                  className="appearance-none bg-gray-300 h-1 rounded-lg
             custom-range "
                ></input>
                <div className="flex justify-between font-semibold text-[#585858]">
                  <span className="text-xs  md:text-sm">Min</span>
                  <span className="text-xs  md:text-sm">Max</span>
                </div>
              </div>
            )}
          </div>
        </div>
        {id !== 7 && <hr className=" border-[#E8E8E8] hidden sm:block" />}
      </div>
    </div>
  );
}

export default SingleFilter;
