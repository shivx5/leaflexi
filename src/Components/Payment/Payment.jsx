import React, { useRef, useState } from "react";
import Arrow from "../../assets/Rent/Arrow.svg";
function Payment() {
  const [selected, setSelected] = useState(false);

  return (
    <div className="flex justify-center items-center bg-gray-700 h-[87dvh]">
      <div className="flex flex-col p-4 sm:p-8 md:p-10 lg:p-12 w-[90%] sm:w-[70%] md:w-[50%] gap-5 sm:gap-6 md:gap-8 lg:gap-10 bg-white rounded-xl">
        {/* Important Note */}
        <div className="font-semibold text-black text-sm md:text-base">
          Important Note*
        </div>

        {/* Requirements */}
        <div className="flex flex-col gap-1.5 sm:gap-3 md:gap-4">
          {[
            "Valid Driving License (Mandatory)",
            "Original Government ID Proof (Aadhaar, Passport, etc.)",
            "Rental Confirmation Details (Booking ID, Email, or SMS)",
            "Fastag Recharge to be done by you",
          ].map((item, idx) => (
            <span
              key={idx}
              className="text-[#4d4d4d] text-xs md:text-sm font-normal"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Terms Checkbox */}
        <div className="flex gap-2 md:gap-3.5 items-center">
          <input
            type="checkbox"
            checked={selected}
            onChange={(e) => setSelected(e.target.checked)}
            className="border-[1.5px] text-[#b2b2b2] rounded-sm size-5 md:size-6"
          />
          <p className="text-xs flex gap-1 items-center">
            I hereby agree to the
            <span className="underline cursor-pointer">
              terms and conditions
            </span>
          </p>
        </div>

        {/* Continue Button */}
        <button
          disabled={!selected}
          className={`flex self-end items-center justify-center w-[40%] p-1.5 md:p-2.5 gap-1.5 md:gap-2.5 rounded-lg font-semibold text-white text-xs md:text-base ${
            selected ? "bg-v6 hover:bg-v6/80" : "bg-N9 cursor-not-allowed"
          }`}
        >
          Confirm Booking
          <img src={Arrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
}
export default Payment;
