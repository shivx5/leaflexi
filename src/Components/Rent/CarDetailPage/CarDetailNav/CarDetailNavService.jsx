import React from "react";
import LocationNav from "./LocationNav";
import RatingNav from "./RatingNav";
import CancellationNav from "./CancellationNav";
import FAQNav from "./FAQNav";
import ConditionNav from "./ConditionNav";
const navArray = [
  <LocationNav />,
  <RatingNav />,
  <CancellationNav />,
  <FAQNav />,
  <ConditionNav />,
];
function CarDetailNavService({ id }) {
  return navArray[id];
}

export default CarDetailNavService;
