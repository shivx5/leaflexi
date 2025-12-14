import React from "react";
import FeatureCard from "./FeatureCard";
import clock from "../../../assets/Rent/clock.svg";
import like from "../../../assets/Rent/like.svg";
import eye from "../../../assets/Rent/eye.svg";
import security from "../../../assets/Rent/security.svg";
const FeatureDetails = [
  {
    id: 1,
    imgUrl: clock,
    desc: "Flexible Leasing & Rental ",
  },
  {
    id: 2,
    imgUrl: like,
    desc: "Quality Assured User Cars ",
  },
  {
    id: 3,
    imgUrl: eye,
    desc: "Transparent Pricing",
  },
  {
    id: 4,
    imgUrl: security,
    desc: "Easy & secure Booking",
  },
  // {
  //     id:3,
  //     imgUrl:"",
  //     desc:"Transparent Pricing"
  // },
  // {
  //     id:3,
  //     imgUrl:"",
  //     desc:"Transparent Pricing"
  // },
];
{
  /* <div className='py-[40px]  justify-between flex px-[100px]  flex-wrap'> */
}
// flex  mb-[20px]   items-center gap-[24px] h-[40px] m-auto   text-wrap

function Feature() {
  return (
    // px-[30px] sm:px-[40px] md:px-auto  flex-wrap
    <div className="py-10 lg:flex lg:justify-between flex-wrap grid grid-cols-2 min-[580px]:grid-cols-3">
      {FeatureDetails.map((data, key) => {
        return <FeatureCard key={data.id} SingleFeatureCardDetails={data} />;
      })}
    </div>
  );
}

export default Feature;

// grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
//                 min-h-40 lg:px-24 md:px-12 sm:px-6 px-4
//                 lg:py-6 md:py-5 sm:py-4 py-8 w-full
