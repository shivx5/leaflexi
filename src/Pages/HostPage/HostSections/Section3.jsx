import React from "react";
import HostCard from "../../../Components/HostCard/HostCard";
import HostCardList from "../../../Utility/HostCardList";
import FAQ from "../../../Components/Body/FAQ/FAQ";

function Section3() {
  return (
    <div>
      <HostCard data={HostCardList[2]} />
      <FAQ />
    </div>
  );
}

export default Section3;
