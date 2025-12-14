import React from "react";
import Rent from "../../../Components/Rent/Rent";
import HomeCars from "../../../Components/Rent/HomeCars/HomeCar";
import Leaflexi from "../../../Components/Rent/Leaflexi/Leaflexi";

function Section1() {
  return (
    <div className="relative">
      <Rent />
      <HomeCars />
      <Leaflexi />
    </div>
  );
}

export default Section1;
