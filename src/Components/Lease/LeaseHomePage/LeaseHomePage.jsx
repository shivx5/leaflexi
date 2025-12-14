import React from "react";
import Arrow from "../../../assets/Rent/Arrow.svg";
function LeaseHomePage() {
  return (
    <div className="relative h-[100dvh] ">
      <img
        src="https://s3-alpha-sig.figma.com/img/90a4/f6cf/5cd9f1fe06f0d9b68424e8f829e3b2d8?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hEQDiQsZXu8me-MEC0RmrrfnlhcYBgv65ZPNaN3eSke1HG8eIEx~g01HLsCkkYwgvqpSfVjX0nVlNJ6-R4RAwjnoDbGfm3GjmGXB7GubeMIppqkZYjPEX~icr0ul2LEcWfbHuk3Vu42i80aP6Uk4H5cEnmWebtXqS3z-UBTuJaRwk9dWSfZFGT1UF3fN2~j7IlwIjsA7JbP4T8rAgg~ZOB2AhxvamjaF2jxaJ1HFWXJ6Jbl173mH8hOXJ3LS6VPGjmoF-unB4y12R9r0cs6w8CNtB5gJMEvzitWJrywKnzO8sr38VO-5ZnaqxIQ0gbmGLnM8Ke0wMiMalZ0NhloeNw__"
        className="absolute top-0 -z-40 object-cover h-full  w-screen"
      ></img>
      <div className="flex flex-col md:flex-row absolute bottom-25 z-20  justify-center w-full p-4 ">
        <div className="flex  justify-between w-full md:w-[85%] flex-col md:flex-row items-center md:items-end gap-6">
          <div className=" text-center md:text-start md:w-[60%] flex flex-col gap-1.5 sm:gap-3  md:gap-5 lg:gap-6 md:items-start items-center">
            <div className="flex gap-3 items-center  ">
              <div className="size-2.5 bg-[linear-gradient(180deg,_#2133D6_0%,_#7D21CF_65%)] rounded-full"></div>
              <span className="text-N12 ">Launching soon</span>
            </div>
            <h2 className="font-bold  text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-N12">
              The Future of Lea-flexi - Lease a Car
            </h2>
          </div>
          <div className="flex flex-col w-[70%] text-center md:text-start   md:w-[30%] gap-5 lg:gap-6 items-center md:items-start justify-end">
            <p className="font-bold  text-xs sm:text-sm md:text-base text-N12">
              Flexible plans, zero hassle-drive the way you want, when you want
            </p>
            <div className="flex gap-2.5 p-1.5 md:p-3 border-[1px] w-32 sm:w-40 md:w-48 lg:w-56 border-v6 rounded-md cursor-pointer items-center justify-center hover:bg-v7">
              <p className="text-N12 text-nowrap md:text-base text-xs">
                Get Notified
              </p>
              <img src={Arrow} className="size-3"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaseHomePage;
