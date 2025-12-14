import React from "react";
import car from "../../../assets/Rent/car.jpg";
import money from "../../../assets/Profile/moneyBag.svg";
import arrow from "../../../assets/carDetail/blueArrow.svg";
import dot from "../../../assets/Profile/dot.svg";
function SingleTrip({ data, tripName, type = "requested" }) {
  const {
    CarName,
    bookingId,
    price,
    status,
    payment,
    pickUpDate,
    DropDate,
    ReturnLocation,
  } = data;
  // console.log(
  //   CarName,
  //   bookingId,
  //   price,
  //   status,
  //   payment,
  //   pickUpDate,
  //   DropDate,
  //   ReturnLocation
  // );
  return (
    <div className="p-3 rounded-lg bg-[#f7f7f7] w-full flex flex-col gap-2">
      <div className="flex  gap-2 flex-col min-[500px]:flex-row  w-full">
        <div className="  w-full h-36  sm:w-56  rounded-lg relative">
          {" "}
          <img
            src={car}
            className="w-full h-full rounded-lg object-cover"
          ></img>
        </div>
        <div className="flex flex-col gap-2   w-full p-1 sm:p-2 lg:p-3 min-[500px]:relative">
          <div className="flex justify-between  w-full space-x-4">
            <div className="flex justify-between min-[500px]:justify-start w-full items-center  flex-wrap gap-2 min-[500px]:gap-2">
              <p className="text-sm md:text-base font-bold ">{CarName}</p>

              <p className="  text-xs  lg:text-sm text-N3 ">
                CarID : {bookingId}
              </p>
            </div>
            {tripName === "Past Trips" && (
              <div className="p-2 lg:absolute right-5  md:p-2.5 bg-primary rounded-md font-semibold text-xs  md:text-base text-N12 cursor-pointer w-16  md:w-24 lg:w-32 h-8 min-[700px]:h-8 md:h-10 lg:h-12  flex items-center justify-center hover:bg-v9">
                Rebook
              </div>
            )}
          </div>
          <hr className="border-[1px] border-[#dadada] border-dashed min-[500px]:hidden" />
          <div className="flex   gap-4   items-center ">
            <div className="flex space-x-3 items-center">
              <img src={money}></img>
              <p className="text-sm md:text-base font-semibold">{price}</p>
              <img src={dot} />
              <p
                className={`list-disc font-normal text-xs ${
                  status === "Cancelled"
                    ? "text-[#EA4335]"
                    : status === "Completed"
                    ? "text-[#0B970E]"
                    : "text-[#2133d6]"
                } `}
              >
                {status}
              </p>
            </div>
          </div>
          <hr className="border-[1px] border-[#dadada] border-dashed min-[500px]:hidden" />

          <div className="w-full md:w-[70%] min-[500px]:flex flex-col gap-1.5  hidden">
            <div className="flex justify-between">
              <p className="text-xs font-normal text-N5">pick up date</p>
              <p className="text-xs font-normal text-N5">Drop date</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="w-3 h-3 bg-[#0B970E] rounded-full"></div>
              <div className="flex-1 border-t border-dashed border-N5"></div>
              <div className="w-3 h-3 bg-[#EA4335] rounded-full"></div>
            </div>
            <div className="flex justify-between">
              <div className="text-xs font-normal text-N5">{pickUpDate}</div>
              <div className="text-xs font-normal text-N5">{DropDate}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[60%] flex flex-col gap-1.5  min-[500px]:hidden">
        <div className="flex justify-between">
          <p className="text-xs font-normal text-N5">pick up date</p>
          <p className="text-xs font-normal text-N5">Drop date</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-3 h-3 bg-[#0B970E] rounded-full"></div>
          <div className="flex-1 border-t border-dashed border-N5"></div>
          <div className="w-3 h-3 bg-[#EA4335] rounded-full"></div>
        </div>
        <div className="flex justify-between">
          <div className="text-xs font-normal text-N5">12 Feb, 10:00 AM</div>
          <div className="text-xs font-normal text-N5">13 Feb, 10:00 AM</div>
        </div>
      </div>
      {ReturnLocation && (
        <>
          <hr className="border-dashed text-[#dadada]"></hr>

          <div className="flex justify-between flex-col gap-2 md:flex-row ">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-sm md:text-base text-N2">
                Return Location
              </p>
              <p className="text-xs text-N3 font-normal">{ReturnLocation}</p>
            </div>
            <div className="flex  items-center gap-2  md:gap-3 lg:gap-4 ">
              <p className="font-normal text-sm text-[#405FF2] text-nowrap">
                Get Direction
              </p>
              <img src={arrow} className="size-3.5"></img>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SingleTrip;
