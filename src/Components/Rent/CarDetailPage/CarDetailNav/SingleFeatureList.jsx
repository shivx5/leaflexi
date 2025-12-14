import React from "react";
import feature from "../../../../assets/CarDetail/feature.svg";

function SingleFeatureList({ data }) {
  console.log(data);
  return (
    <div className="flex flex-col gap-2 ">
      <p className="font-semibold text-sm md:text-base ">{data?.name}</p>
      <div className=" flex flex-col gap-3">
        {data?.feature.map((values, key) => {
          return (
            <div className="flex gap-3  ">
              <img className="size-4" src={feature}></img>
              <span className="font-normal text-xs md:text-sm text-nowrap">
                {values}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SingleFeatureList;
