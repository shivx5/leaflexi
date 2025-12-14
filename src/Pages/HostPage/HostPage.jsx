import React from "react";
import Section1 from "./HostSections/Section1";
import Section2 from "./HostSections/Section2";
import Section3 from "./HostSections/Section3";
import ScrollToTop from "../../Routes/ScrollToTop";

function HostPage() {
  // console.log("host page rendered");
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}

export default HostPage;
