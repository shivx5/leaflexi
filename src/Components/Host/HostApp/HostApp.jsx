import React from "react";
import playstore from "../../../assets/Footer/PlayStore.svg";
import mobile from "../../../assets/Host/mobile.svg";
function HostApp() {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-14 md:py-16 lg:py-20 gap-8 sm:gap-10 md:gap-12 lg:gap-14 ">
      <section className="font-bold flex flex-col justify-center items-center w-full  md:w-[80%] gap-4 ">
        <h4 className=" text-xl sm:text-2xl md:text-4xl lg:text-5xl text-[#1A1A1A] text-center">
          Host with ease using our user friendly
        </h4>
        <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary">
          Mobile app
        </h4>
        <p className=" text-xs md:text-sm lg:text-base text-N4 font-normal text-center ">
          List your car, set your availability, respond to bookings, and track
          earnings — all in one place. Our intuitive mobile app is designed to
          give you complete control and real-time updates, no matter where you
          are.
        </p>
      </section>
      <section>
        <img
          src={playstore}
          className=" h-8  sm:h-12  md:w-32 md:h-16  lg:h-14"
        />
      </section>
      <section>
        <img
          src={mobile}
          className="object-cover h-[14rem] sm:h-[18rem] md:h-[25rem] lg:h-[30rem]"
        />
      </section>
    </div>
  );
}

export default HostApp;
