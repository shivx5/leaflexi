import React from "react";
import CarInfo from "../../Rent/CarDetailPage/CarInfo/CarInfo";
import BookingCardDetails from "../../Payment/BookingCarDetails/BookingCardDetails";
import TransactionCardDetails from "../../Payment/TransactionCardDetails/TransactionCardDetails";
import LocationNav from "../../Rent/CarDetailPage/CarDetailNav/LocationNav";

function MyOngoingTrip({}) {
  const status = "upcoming";

  // get data from id from URl and pass data through props
  return (
    <div className="flex  gap-8 sm:gap-6 md:gap-8 lg:gap-10  sm:px-6 md:px-12 lg:px-24   py-6 px-4 md:flex-row flex-col">
      <div className="flex flex-col gap-4 w-full  lg:w-[60%]">
        <CarInfo />
        <BookingCardDetails type="trip" status={status} />
        <TransactionCardDetails />
        <div className="flex gap-3.5 sm:gap-4 md:gap-5 lg:gap-6">
          <div className="text-center text-xs sm:text-sm  md:text-base text-primary border border-primary p-2.5 rounded-lg w-full hover:bg-primary hover:text-N12">
            {status === "ongoing" && "Return Car"}
            {status === "upcoming" && "Modify Booking"}
            {status === "past" && "Rebook"}
          </div>
          <div className="text-center text-xs sm:text-sm  md:text-base text-primary border border-primary p-2.5 rounded-lg w-full  hover:bg-primary hover:text-N12">
            Download Invoice
          </div>
        </div>
      </div>
      <div>
        <LocationNav type="payment" status={status} />
      </div>
    </div>
  );
}

export default MyOngoingTrip;
