import React from "react";
import FeatureList from "../../../../Utility/FeatureList";
import SingleFeatureList from "./SingleFeatureList";
function FeaturesNav() {
  return (
    <div className="flex flex-col gap-6">
      <p className=" text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold">
        Features
      </p>
      <div className="grid grid-flow-col justify-between overflow-x-scroll space-x-9 no-scrollbar">
        {FeatureList.map((values, key) => {
          return <SingleFeatureList data={values} key={values.name} />;
        })}
      </div>
    </div>
  );
}

export default FeaturesNav;
