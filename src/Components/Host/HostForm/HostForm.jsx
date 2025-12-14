import React from "react";

function HostForm() {
  return (
    <div className=" p-2 sm:p-4 md:p-6 lg:p-10 flex flex-col gap-4   rounded-xl w-full sm:w-[400px]  md:w-[584px]  items-center sm:items-start bg-white">
      <section className="flex flex-col gap-3 px-2 sm:px-4  lg:px-6 ">
        <h5 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-N2 ">
          Get started
        </h5>
        <p className=" text-N4 font-normal text-sm sm:text-base md:text-lg lg:text-xl">
          Submit the form to start
        </p>
      </section>
      <section className="">
        <form className="text-N4 text-xs md:text-sm lg:text-base flex flex-col gap-3">
          <div className=" px-2 sm:px-4  lg:px-6 py-2  md:py-2.5 lg:py-4 flex gap-2 md:gap-3  lg:gap-4 ">
            <label for="firstname" className="text-nowrap w-40">
              First name*
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="border-b-[1px] focus:outline-none text-N7"
            />
          </div>
          <div className=" px-2 sm:px-4  lg:px-6 py-2  md:py-2.5 lg:py-4 flex gap-4">
            <label for="mobilenumber" className="text-nowrap w-40">
              Mobile Number*
            </label>
            <input
              type="text"
              id="mobilenumber"
              name="mobilenumber"
              className="border-b-[1px] focus:outline-none text-N7"
            />
          </div>
          <div className=" px-2 sm:px-4  lg:px-6 py-2  md:py-2.5 lg:py-4 flex gap-4">
            <label for="emailaddress" className="text-nowrap w-40">
              Email address*
            </label>
            <input
              type="text"
              id="emailaddress"
              name="emailaddress"
              className="border-b-[1px] focus:outline-none text-N7"
            />
          </div>
          <div className=" px-2 sm:px-4  lg:px-6 py-2  md:py-2.5 lg:py-4 flex gap-4">
            <label for="carmodel" className="text-nowrap w-40">
              Car Model*
            </label>
            <input
              type="text"
              id="carmodel"
              name="carmodel"
              className="border-b-[1px] focus:outline-none text-N7 "
            />
          </div>
          <div className=" px-2 sm:px-4  lg:px-6 py-2  md:py-2.5 lg:py-4 flex gap-4">
            <label for="vehiclenumber" className="text-nowrap w-40">
              Vehicle Number*
            </label>
            <input
              type="text"
              id="vehiclenumber"
              name="vehiclenumber"
              className="border-b-[1px] focus:outline-none text-N7"
            />
          </div>
        </form>
      </section>
      <button className="p-2.5 bg-primary rounded-sm text-N12 font-semibold text-xs  md:text-sm lg:text-base w-42 sm:w-48 md:w-52 lg:w-56 self-end cursor-pointer">
        Enquire now
      </button>
    </div>
  );
}

export default HostForm;
