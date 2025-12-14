import React from "react";
import Booking from "../Body/Booking/Booking";
import LeasePlan from "../Lease/LeasePlan/LeasePlan";
import HostPlan from "./HostPlan/HostPlan";
import FAQ from "../Body/FAQ/FAQ";
import LeaseHomePage from "../Lease/LeaseHomePage/LeaseHomePage";
import HostHomePage from "./HostPlan/HostHomePage";
import HostEarn from "./HostEarn/HostEarn";
import HostCard from "../HostCard/HostCard";
import HostCardList from "../../Utility/HostCardList.js";
import HostApp from "./HostApp/HostApp.jsx";
import HostForm from "./HostForm/HostForm.jsx";
import HostDataCard from "./HostDataCard/HostDataCard.jsx";

function Host() {
  return (
    <div>
      <HostHomePage />
      <HostApp />
      {/* <HostForm /> */}
      {/* <HostDataCard /> */}
      <Booking id={2} />
      <HostPlan />
      <HostCard data={HostCardList[2]} />
      <FAQ />
      {/* <HostEarn /> */}
    </div>
  );
}

export default Host;
