import React from "react";
import money from "../../../assets/Profile/moneyBag.svg";

function BookingCardDetails({ status, type }) {
  return (
    <div className="p-4 border rounded-xl shadow-sm border-[#dadada] flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6">
      <h2 className="text-sm md:text-base font-bold">Booking Details</h2>

      <div className="grid grid-cols-3  items-center">
        {/* Booking ID */}
        <div className="text-N5 text-xs font-normal px-2 md:px-4 py-1.5 md:py-3">
          Booking ID
        </div>
        <div className="col-span-2 text-N3 text-xs md:text-sm px-2 md:px-4 py-1.5 md:py-3">
          LF123456789
        </div>

        {/* Booking Date */}
        <div className="text-N5 text-xs font-normal px-2 md:px-4 py-1.5 md:py-3">
          Booking Date
        </div>
        <div className="col-span-2 text-N3 text-xs md:text-sm px-2 md:px-4 py-1.5 md:py-3">
          11 Feb, 10:00 AM
        </div>

        {/* Trip Type Specific Fields */}
        {type === "trip" && (
          <>
            {/* Status with Money and Partial Payment */}
            <div className="text-N5 text-xs font-normal px-2 md:px-4 py-1.5 md:py-3">
              Status
            </div>
            <div className="col-span-2 text-N3 text-xs md:text-sm px-2 md:px-4 py-1.5 md:py-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                <div className="flex items-center gap-1 md:gap-1.5 lg:gap-2.5">
                  <img src={money} alt="Money Icon" className="w-4 h-4" />
                  <p className="text-sm md:text-base font-semibold">2,000</p>
                </div>
                <p
                  className={`text-xs font-normal ${
                    status === "Cancelled"
                      ? "text-[#EA4335]"
                      : status === "Completed"
                      ? "text-[#0B970E]"
                      : "text-[#2133d6]"
                  }`}
                >
                  {status}
                </p>
              </div>
            </div>

            {/* Pick and Drop Info */}
            <div className="text-N5 text-xs font-normal px-2 md:px-4 py-1.5 md:py-3">
              Pick and Drop Date & Location
            </div>
            <div className="col-span-2 text-N3 text-xs md:text-sm px-2 md:px-4 py-1.5 md:py-3">
              <div className="w-full flex flex-col gap-1.5">
                <div className="flex justify-between">
                  <p className="text-xs font-normal text-N5">Pick Up Date</p>
                  <p className="text-xs font-normal text-N5">Drop Date</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-3 h-3 bg-[#0B970E] rounded-full"></div>
                  <div className="flex-1 border-t border-dashed border-N5"></div>
                  <div className="w-3 h-3 bg-[#EA4335] rounded-full"></div>
                </div>
                <div className="flex justify-between">
                  <p className="text-xs font-normal text-N5">10:00 AM</p>
                  <p className="text-xs font-normal text-N5">10:00 PM</p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Status (if not past) */}
        {status !== "past" && (
          <>
            <div className="text-N5 text-xs font-normal px-2 md:px-4 py-1.5 md:py-3">
              Status
            </div>
            <div className="col-span-2 text-N3 text-xs md:text-sm px-2 md:px-4 py-1.5 md:py-3">
              Confirmed (Pending Full Payment)
            </div>
          </>
        )}

        {/* Next Step (only if upcoming) */}
        {status === "upcoming" && (
          <>
            <div className="text-N5 text-xs font-normal px-2 md:px-4 py-1.5 md:py-3">
              Next Step
            </div>
            <div className="col-span-2 text-N3 text-xs md:text-sm px-2 md:px-4 py-1.5 md:py-3">
              Pay the remaining 80% before pickup to complete the process.
            </div>
          </>
        )}

        {/* Payment Type Specific Fields */}
        {type === "payment" && (
          <>
            {/* Contact Info */}
            <div className="text-N5 text-xs font-normal px-2 md:px-4 py-1.5 md:py-3">
              Contact Info
            </div>
            <div className="col-span-2 text-N3 text-xs md:text-sm px-2 md:px-4 py-1.5 md:py-3">
              +91 1234567890
            </div>

            {/* Cancellation Policy */}
            <div className="text-N5 text-xs font-normal px-2 md:px-4 py-1.5 md:py-3">
              Cancellation
            </div>
            <div className="col-span-2 text-N3 text-xs md:text-sm px-2 md:px-4 py-1.5 md:py-3">
              Not available – No refund
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default BookingCardDetails;
