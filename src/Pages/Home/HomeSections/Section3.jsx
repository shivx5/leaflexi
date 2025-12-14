import React from "react";
import Guide from "../../../Components/Rent/Guide/Guide";
import Blogs from "../../../Components/Rent/Blogs/Blogs";
import Community from "../../../Components/Body/Community/Community";
import FAQ from "../../../Components/Body/FAQ/FAQ";

function Section3() {
  return (
    <div className="flex flex-col">
      <Guide />
      <Blogs />
      <FAQ />
      <Community />
    </div>
  );
}

export default Section3;
