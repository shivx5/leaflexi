import React from "react";
import Booking from "../Body/Booking/Booking";
import Community from "../Body/Community/Community";
import LeasePlan from "./LeasePlan/LeasePlan";
import LeaseHomePage from "./LeaseHomePage/LeaseHomePage";
function Lease() {
  return (
    <div>
      <LeaseHomePage />
      <Booking id={3} />
      <LeasePlan />
      <Booking id={1} />
      <Community />
      {/* <Booking id1={1} id2={1} /> */}
    </div>
  );
}

export default Lease;
