import React, { useEffect, useRef, useState } from "react";
import tick from "../../../assets/Payment/tick.svg";
import pin from "../../../assets/Payment/pin.svg";
import bell from "../../../assets/Payment/bell.svg";
import info from "../../../assets/Payment/info.svg";
import wrong from "../../../assets/Payment/wrong.svg";
import BlaclArrow from "../../../assets/Menu/blackArrow.svg";
import car from "../../../assets/CarDetail/CarImage.svg";
import LocationNav from "../../Rent/CarDetailPage/CarDetailNav/LocationNav";
import FAQNav from "../../Rent/CarDetailPage/CarDetailNav/FAQNav";
import BookingCardDetails from "../BookingCarDetails/BookingCardDetails";
import TransactionCardDetails from "../TransactionCardDetails/TransactionCardDetails";
const ModalOverlay = ({ zIndex = 20 }) => (
  <div
    className={`fixed inset-0 flex items-center justify-center bg-black opacity-50 z-[${zIndex}] pointer-events-auto`}
  />
);
export default function PaymentDetails() {
  const [activeModal, setActiveModal] = useState(""); // 'modify' | 'cancel' | 'confirmCancel'

  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const finalRef = useRef(null);

  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        (activeModal === "modify" &&
          outerRef.current &&
          !outerRef.current.contains(e.target)) ||
        (activeModal === "cancel" &&
          innerRef.current &&
          !innerRef.current.contains(e.target)) ||
        (activeModal === "confirmCancel" &&
          finalRef.current &&
          !finalRef.current.contains(e.target))
      ) {
        closeModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeModal]);
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeModal]);
  return (
    <div className="flex  gap-8 sm:gap-6 md:gap-8 lg:gap-10  sm:px-6 md:px-12 lg:px-24   py-6 px-4 lg:flex-row flex-col ">
      <div className="flex flex-col gap-4 w-full  lg:w-[60%] relative">
        <div className="flex gap-4 md:gap-6 lg:gap-8">
          <img className=" size-8 sm:size-10 md:size-16" src={tick}></img>
          <div className="flex flex-col gap-0.5">
            <p className="font-semibold text-sm  md:text-base lg:text-lg">
              Booking Confirmed
            </p>
            <p className="font-bold  text-base sm:text-lg  md:text-xl lg:text-2xl">
              Thank you, Dev!
            </p>
            <span className="font-normal text-xs text-[#666666]">
              you should have received the confirmation form with your booking
              ID in Mail and Whatsapp.
            </span>
          </div>
        </div>
        <BookingCardDetails type="payment" />
        <div className="flex flex-col gap-4 text-N5">
          <img src={car}></img>
          <div className="flex flex-col px-2 sm:px-3 md:px-3.5 lg:px-4 py-1 md:py-2 lg:py-3 gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4">
            <div className="flex flex-col gap-1 sm:gap-3 md:gap-3.5 lg:gap-4">
              <h3 className="font-bold text-sm lg:text-base text-N1 ">
                Toyota Corolla 2023
              </h3>
              <p className="text-xs font-semibold">SUV</p>
              <p className="text-xs font-semibold">Number plate : KA3456</p>
            </div>
            <hr className="flex-1 border-t-2 border-[#dadada] border-dashed" />
            <div className="flex gap-2.5">
              <img src={pin}></img>
              <p className=" font-normal text-xs md:text-[14px] ">
                10 Feb, 10:00 AM – 15 Feb, 10:00 AM (5 Days)
              </p>
            </div>
          </div>
        </div>
        <TransactionCardDetails />
        <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
          <div className="flex gap-3.5 sm:gap-4 md:gap-5 lg:gap-6">
            <div
              className="text-center text-xs sm:text-sm  md:text-base text-primary border border-primary p-2.5 rounded-lg w-full hover:bg-primary hover:text-N12"
              onClick={() => {
                setActiveModal("modify");
              }}
            >
              Modify booking
            </div>
            <div className="text-center text-xs sm:text-sm  md:text-base text-primary border border-primary p-2.5 rounded-lg w-full  hover:bg-primary hover:text-N12">
              Download Invoice
            </div>
          </div>
          {activeModal === "modify" && (
            <div className="fixed inset-0 z-30 flex items-center justify-center">
              {/* Dimmed background */}
              <div className="absolute inset-0 bg-black opacity-50 pointer-events-none z-20" />

              {/* Modal content */}
              <div
                className="relative z-30 flex flex-col gap-3 w-[90%] sm:w-[70%] md:w-[400px] bg-white rounded-md p-4 text-center shadow-lg"
                ref={outerRef}
              >
                <p
                  className="p-2 text-sm md:text-base text-black cursor-pointer hover:bg-red-500 hover:text-white rounded-md"
                  onClick={() => {
                    setActiveModal("cancel");
                  }}
                >
                  Cancel Booking
                </p>
                <p className="p-2 text-sm md:text-base text-black cursor-pointer hover:bg-primary hover:text-white rounded-md">
                  Reschedule Booking
                </p>
              </div>
            </div>
          )}
          {activeModal === "cancel" && (
            <>
              <div className="fixed inset-0 z-40 flex items-center justify-center">
                {/* Dimmed background */}
                <div className="absolute inset-0 bg-black opacity-50 pointer-events-none z-30" />
                <div
                  className="flex w-[90vw] z-40  absolute justify-center items-center "
                  ref={innerRef}
                >
                  <div className="w-full md:w-md h-[452px] p-3  gap-2 text-center z-[26] flex flex-col  bg-[#f7f7f7] rounded-lg justify-center items-center">
                    <div className="flex flex-col items-center justify-center gap-2 ">
                      <div className="text- p-2.5 font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]">
                        Cancel booking
                      </div>
                      <div className="flex  gap-3 items-center ">
                        <div className="flex px-1.5  sm:px-2 md:px-3 py-2 sm:py-3 md:py-4 gap-3 rounded-lg bg-v1">
                          <img
                            src={bell}
                            className="size-4 sm:size-5 md:size-6"
                          ></img>
                          <p className="font-normal  text-primary text-xs md:text-base">
                            No Refund for this Booking
                          </p>
                        </div>
                        <img src={info} className="size-3 md:size-4"></img>
                      </div>
                    </div>
                    <div className="font-normal text-xs sm:text-sm text-[#000000]  bg-N11 p-3 w-full">
                      Reason for Cancelling
                    </div>
                    <div className="font-normal text-xs sm:text-sm text-[#000000] hover:bg-v6 p-3 rounded-lg hover:text-N12 w-full">
                      Looking for another car
                    </div>
                    <div className="font-normal text-xs sm:text-sm text-[#000000] hover:bg-v6 p-3 rounded-lg hover:text-N12 w-full">
                      Considering a hybric model
                    </div>
                    <div className="font-normal text-xs sm:text-sm text-[#000000] hover:bg-v6 p-3 rounded-lg hover:text-N12 w-full">
                      Exploring compact SUVs
                    </div>
                    <div className="font-normal text-xs sm:text-sm text-[#000000] hover:bg-v6 p-3 rounded-lg hover:text-N12 w-full">
                      Exploring Large SUVs
                    </div>
                    <div
                      className="flex gap-2.5 p-2.5 border-[1px] rounded-md border-primary w-36 md:w-56 justify-center items-center hover:bg-v8 hover:text-N12 cursor-pointer"
                      onClick={() => {
                        setActiveModal("confirmCancel");
                      }}
                    >
                      <p className="text-xs md:text-base font-semibold ">
                        Cancel Booking
                      </p>
                      <img
                        src={BlaclArrow}
                        className="size-2.5 md:size-3.5"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {activeModal === "confirmCancel" && (
            <div className="fixed inset-0 z-40 flex items-center justify-center">
              {/* Dimmed background */}
              <div className="absolute inset-0 bg-black opacity-50 pointer-events-none z-30" />
              <div className="flex w-[90vw] z-40  absolute justify-center items-center ">
                <div
                  ref={finalRef}
                  className="flex flex-col gap-2  items-center justify-center w-full sm:w-[50%] md:w-[70%] bg-[#ffffff] px-3 py-6 rounded-lg h-[462px] z-[33]"
                >
                  <img src={wrong}></img>
                  <p className="font-semibold text-xs sm:text-base md:text-lg">
                    Being cancelled
                  </p>
                  <h3 className="font-bold text-lg  md:text-xl lg:text-2xl text-[#171717]">
                    Thank you Buddy !
                  </h3>
                  <span className="text-[#000000] font-normal text-xs w-[90%] text-center">
                    You should have received the confirmation from with your
                    booking Id in Mail and Whatsapp
                  </span>
                  <div className="text-center text-primary border-[1px] border-primary text-xs md:text-base font-semibold rounded-lg p-1.5 sm:p-2.5 cursor-pointer hover:bg-primary hover:text-N12 ">
                    View your trips
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex gap-3 items-center">
            <span className="text-sm font-semibold text-N3">Need help?</span>
            <p className=" underline cursor-pointer text-primary font-semibold text-xs sm:text-sm ">
              Contact Us
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6  w-full lg:w-[50%] ">
        <LocationNav type="payment" />
        <h1 className="font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl w-full sm:w-1/2">
          FAQ's
        </h1>
        <FAQNav from="payment" />
      </div>
    </div>
  );
}
