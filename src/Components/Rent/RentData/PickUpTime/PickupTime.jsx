import React, { useEffect, useState } from "react";
// import  from "../../../../CustButton/Calender";
import PopupDateTimePicker from "../Calender/Calender";
function PickupTime({
  enablePickUp,
  pickUp,
  setPickUpData,
  enableDrop,
  drop,
  setdropData,
  isPickupDate,
  pickUpData,
}) {
  function handleData(value) {
    if (pickUp) {
      setPickUpData(value);
      enablePickUp(false);
    }
    if (drop) {
      setdropData(value);
      enableDrop(false);
    }
  }

  return (
    <div className=" space-y-4">
      {(pickUp || drop) && (
        <PopupDateTimePicker
          isPickupDate={isPickupDate}
          onChange={(data) => handleData(data)}
          enablePickUp={enablePickUp}
          pickUp={pickUp}
          enableDrop={enableDrop}
          drop={drop}
        />
      )}

      {/* {pickup && (
        <div className="bg-gray-100 p-3 rounded text-sm">
          <p>
            Selected: {pickup.day}/{pickup.mnth}/{pickup.year} — {pickup.hr}:
            {pickup.min} {pickup.ampm}
          </p>
        </div>
      )} */}
    </div>
  );
}

export default PickupTime;
