import React from "react";
import car from "../../../assets/Host/car.jpg";
import Arrow from "../../../assets/Rent/Arrow.svg";
function HostEarn() {
  return (
    <div className="relative h-[90dvh] w-full">
      <img
        src="https://s3-alpha-sig.figma.com/img/9f26/e08d/19f23cf2b01768a6b08cfa94228afd4a?Expires=1746403200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DsAkdMrQUdhjcomw3LhPDAYYcdYr50DtjLYDsQBg~hTovx-63rl37mUtwc1ETzOdx0~yaDl38OPuUpkTJW8U3i44qczHZwC4LA7v7q5Jytnl4xFKdWQjp0VFXi9lRchm-6cdiYPjHV2p4f-lPjc98mbNerE93KeuNHV6LBeaQb4lFa9jFxBO7z0P5Cg0EvNgOj4GGA9n~V-aYltNgvwnULT~883NNtBw0HZaoz9UB26kTjePPL8F0BSGAjsyBGpQk6kNLIgW2wp~gVRmPF7wnPZbl1f8qZfiVF9ifh3lu6c82zG9DC32aCN7Z3L6Oo2Ask2FgRPC-FA234cRWrKUnA__"
        className=" h-full w-screen object-cover rounded-2xl  absolute top-0 -z-30 "
      ></img>

      <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-14 text-center absolute  w-full justify-center items-center bottom-10">
        <h2 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-N12 w-full">
          Reacy to Earn? Apply Today!
        </h2>
        <div className="flex gap-2.5 p-1.5 md:p-3 border-[1px] w-32 sm:w-40 md:w-48 lg:w-56 border-v6 rounded-md cursor-pointer items-center justify-center hover:bg-v7 ">
          <p className="text-N12 text-nowrap md:text-base text-xs">
            Get Notified
          </p>
          <img src={Arrow} className="size-3"></img>
        </div>
      </div>
    </div>
  );
}

export default HostEarn;
