import React, { useState } from "react";
import PopupDateTimePicker from "../../../../CustButton/Calender";
function DropTime() {
  const [pickup, setPickup] = useState(null);
  // console.log(pickup);

  return (
    <div className="p-4 space-y-4">
      <PopupDateTimePicker
        isPickupDate={false}
        onChange={(data) => console.log(data)}
      />
      {/* 
      {pickup && (
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

export default DropTime;
