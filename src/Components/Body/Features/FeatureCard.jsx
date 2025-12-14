import React from "react";

function FeatureCard({ SingleFeatureCardDetails }) {
  const imageUrl = SingleFeatureCardDetails?.imgUrl;
  const desc = SingleFeatureCardDetails?.desc;
  return (
    // flex  mb-[20px] w-[200px]  items-center gap-[24px] h-[40px] m-auto sm:w-[200px]  text-wrap
    <div className="flex items-center gap-[clamp(0.75rem,2vw,1.5rem)] text-wrap mb-5">
      <img src={imageUrl} className=""></img>
      <span className="font-medium text-xs md:text-sm lg:text-base text-[#FAFAFA]">
        {desc}
      </span>
    </div>
  );
}
// truncate hover:overflow-visible

export default FeatureCard;
