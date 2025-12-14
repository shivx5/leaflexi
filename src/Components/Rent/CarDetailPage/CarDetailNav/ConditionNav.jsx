import React, { useState } from "react";
import ConditionList from "../../../../Utility/ConditionList";
import SingleConditionList from "./SingleConditionList";
import point from "../../../../assets/CarDetail/point.svg";
function ConditionNav() {
  const [display, setDisplay] = useState(0);
  function handleDisplay(index) {
    setDisplay(index);
  }
  // console.log(display);
  // console.log(ConditionList);
  return (
    <div className="min-[950px]:flex justify-between">
      <div className="flex flex-col gap-1 lg:w-[50%] ">
        <div className="flex min-[950px]:flex-col overflow-x-scroll no-scrollbar scroll-smooth">
          {ConditionList?.map((values, map) => {
            return (
              <div
                className={`cursor-pointer flex items-center gap-3 p-3 md:p-3 ${
                  display === values?.id && "bg-[#f5f5f5]"
                }`}
                key={values?.id}
                onClick={() => {
                  handleDisplay(values?.id);
                }}
              >
                <img className="size-2" src={point}></img>
                <p className="font-medium text-xs text-N5 text-nowrap">
                  {values.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" p-5 lg:p-6 bg-[#f5f5f5]">
        <SingleConditionList data={ConditionList[display]} />
      </div>
    </div>
  );
}

export default ConditionNav;
