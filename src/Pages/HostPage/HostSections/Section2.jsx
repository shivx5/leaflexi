import React from "react";
import Booking from "../../../Components/Body/Booking/Booking";
import HostPlan from "../../../Components/Host/HostPlan/HostPlan";

function Section2() {
  return (
    <div>
      <Booking id={2} />
      <HostPlan />
    </div>
  );
}

export default Section2;
