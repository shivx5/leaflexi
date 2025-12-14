import React from "react";
import Booking from "../../../Components/Body/Booking/Booking";
import HostCard from "../../../Components/HostCard/HostCard";
import HostCardList from "../../../Utility/HostCardList";
import AffordableCar from "../../../Components/Rent/AffordableCar/AffordableCar";
import ExclusiveOffers from "../../../Components/Rent/ExclusiveOffers/ExclusiveOffers";

function Section2() {
  return (
    <>
      <Booking id={0} />
      <HostCard data={HostCardList[2]} />
      <AffordableCar />
      <ExclusiveOffers />
    </>
  );
}

export default Section2;
