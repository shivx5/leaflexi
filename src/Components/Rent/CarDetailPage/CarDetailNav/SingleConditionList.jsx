import React from "react";

function SingleConditionList({ data }) {
  // console.log(data);
  return (
    <div className="flex flex-col gap-1.5 md:gap-2 ">
      {data?.data?.map((values, index) => {
        return (
          <div
            className="flex gap-2 font-normal text-xs sm:text-sm md:text-base text-N4"
            key={index}
          >
            <ol className="list-disc">
              <li className="  lg:leading-7">{values}</li>
            </ol>
          </div>
        );
      })}
    </div>
  );
}

export default SingleConditionList;
