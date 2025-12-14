import React, { useState, useRef, useEffect } from "react";

const months = [
  { name: "January", days: 31 },
  { name: "February", days: 28 },
  { name: "March", days: 31 },
  { name: "April", days: 30 },
  { name: "May", days: 31 },
  { name: "June", days: 30 },
  { name: "July", days: 31 },
  { name: "August", days: 31 },
  { name: "September", days: 30 },
  { name: "October", days: 31 },
  { name: "November", days: 30 },
  { name: "December", days: 31 },
];

function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const format = (n) => String(n).padStart(2, "0");

const getRoundedTime = () => {
  const now = new Date();
  const minutes = now.getMinutes();
  const roundedMinutes = Math.round(minutes / 15) * 15;

  if (roundedMinutes === 60) {
    now.setHours(now.getHours() + 1);
    now.setMinutes(0);
  } else {
    now.setMinutes(roundedMinutes);
  }

  return now;
};

const SingleRangeDateTimePicker = ({ onChange, enablePickUp, enableDrop }) => {
  const today = new Date();
  const currentTime = getRoundedTime();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [showPicker, setShowPicker] = useState(true);

  const [step, setStep] = useState("pickup"); // pickup → drop
  const [pickupDateTime, setPickupDateTime] = useState(null);
  const [dropDateTime, setDropDateTime] = useState(null);

  const [hour, setHour] = useState(currentTime.getHours() % 12 || 12); // Default hour
  const [minute, setMinute] = useState(currentTime.getMinutes()); // Default minute
  const [second] = useState(0);
  const [ampm, setAmPm] = useState(currentTime.getHours() >= 12 ? "PM" : "AM"); // Default AM/PM

  const pickerRef = useRef();

  useEffect(() => {
    const handleOutside = (e) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target)) {
        setShowPicker(false);
        enablePickUp && enablePickUp(false);
        enableDrop && enableDrop(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [enablePickUp, enableDrop]);

  const daysInMonth =
    currentMonth === 1 && isLeapYear(currentYear)
      ? 29
      : months[currentMonth].days;
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const dates = Array.from({ length: firstDay }, () => null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  const isPastDate = (y, m, d) => {
    const dt = new Date(y, m, d);
    dt.setHours(0, 0, 0, 0);
    const t0 = new Date();
    t0.setHours(0, 0, 0, 0);
    return dt < t0;
  };

  const isToday = (y, m, d) => {
    const dt = new Date(y, m, d);
    return dt.toDateString() === today.toDateString();
  };

  const handleDateSelect = (date) => {
    const newDate = new Date(currentYear, currentMonth, date);
    const selectedDateTime = {
      hr: hour,
      min: minute,
      sec: second,
      ampm,
      day: date,
      mnth: currentMonth + 1,
      year: currentYear,
    };

    if (step === "pickup") {
      setPickupDateTime(selectedDateTime);
      if (dropDateTime) {
        setDropDateTime({
          ...dropDateTime,
          hr: hour,
          min: minute,
          ampm,
        });
      }
      setStep("drop");
    } else {
      setDropDateTime(selectedDateTime);
      if (pickupDateTime) {
        setPickupDateTime({
          ...pickupDateTime,
          hr: hour,
          min: minute,
          ampm,
        });
      }
    }

    // Check if the selected date is today and set the time accordingly
    if (isToday(currentYear, currentMonth, date)) {
      const roundedTime = getRoundedTime();
      setHour(roundedTime.getHours() % 12 || 12); // Convert to 12-hour format
      setMinute(roundedTime.getMinutes());
      setAmPm(roundedTime.getHours() >= 12 ? "PM" : "AM");
    } else {
      setHour(9); // Default to 9:00 AM if it's not today
      setMinute(45); // Default to 45 minutes
      setAmPm("AM"); // Default to AM
    }
  };

  const handleOk = () => {
    if (!pickupDateTime || !dropDateTime)
      return alert("Please select both pickup and drop.");
    onChange({ pickupData: pickupDateTime, dropData: dropDateTime });
    enablePickUp && enablePickUp(false);
    enableDrop && enableDrop(false);
    setShowPicker(false);
  };

  return (
    <div className="z-50">
      {showPicker && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            ref={pickerRef}
            className="w-[90%] max-w-[450px] bg-white p-4 rounded-md shadow space-y-4"
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 bg-v1 text-xs text-gray-600 p-4 rounded-xs">
                <p className=" text-center  ">
                  {pickupDateTime
                    ? `Pickup: ${pickupDateTime.day}/${pickupDateTime.mnth}`
                    : "Pickup Date"}
                </p>
                <span>:</span>
                <p className="flex gap-0.5 items-center">
                  <span>{hour}</span>
                  <span>{ampm}</span>
                </p>
              </div>

              <span className="text-2xl rotate-180">← </span>
              <div className="flex gap-2 items-center bg-v1 p-4 text-xs text-gray-600 rounded-xs">
                <p className=" text-center  ">
                  {dropDateTime
                    ? ` Drop: ${dropDateTime.day}/${dropDateTime.mnth}`
                    : "Drop Date"}
                </p>
                <span>:</span>
                <p className="flex gap-0.5 items-center">
                  <span>{hour}</span>
                  <span>{ampm}</span>
                </p>
              </div>
            </div>
            {/* <div className="text-center text-sm font-semibold text-gray-700">
              Select {step === "pickup" ? "Pickup" : "Drop"} Date & Time
            </div> */}

            {/* Month Nav */}
            <div className="flex justify-between items-center">
              <button
                onClick={() =>
                  currentMonth === 0
                    ? (setCurrentMonth(11), setCurrentYear(currentYear - 1))
                    : setCurrentMonth(currentMonth - 1)
                }
                className="px-2 py-1 bg-gray-100 rounded"
              >
                &lt;
              </button>
              <span className="font-medium">
                {months[currentMonth].name}{" "}
                <span className="text-primary font-bold">{currentYear}</span>
              </span>
              <button
                onClick={() =>
                  currentMonth === 11
                    ? (setCurrentMonth(0), setCurrentYear(currentYear + 1))
                    : setCurrentMonth(currentMonth + 1)
                }
                className="px-2 py-1 bg-gray-100 rounded"
              >
                &gt;
              </button>
            </div>

            {/* <p className="text-xs text-gray-600 text-center p-4 bg-v1">
              {pickupDateTime
                ? `Pickup: ${pickupDateTime.day}/${pickupDateTime.mnth}`
                : "Select Pickup Date"}
              {dropDateTime &&
                ` → Drop: ${dropDateTime.day}/${dropDateTime.mnth}`}
            </p> */}

            {/* Calendar */}
            <div className="grid grid-cols-7 text-xs text-center font-medium text-gray-600">
              {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 text-xs text-center gap-3">
              {dates.map((date, idx) => {
                const disabled =
                  date === null || isPastDate(currentYear, currentMonth, date);
                const isPickup =
                  pickupDateTime &&
                  pickupDateTime.day === date &&
                  pickupDateTime.mnth === currentMonth + 1 &&
                  pickupDateTime.year === currentYear;
                const isDrop =
                  dropDateTime &&
                  dropDateTime.day === date &&
                  dropDateTime.mnth === currentMonth + 1 &&
                  dropDateTime.year === currentYear;
                const inRange =
                  pickupDateTime &&
                  dropDateTime &&
                  new Date(
                    pickupDateTime.year,
                    pickupDateTime.mnth - 1,
                    pickupDateTime.day
                  ) <= new Date(currentYear, currentMonth, date) &&
                  new Date(currentYear, currentMonth, date) <=
                    new Date(
                      dropDateTime.year,
                      dropDateTime.mnth - 1,
                      dropDateTime.day
                    );
                const beforePickup =
                  step === "drop" &&
                  pickupDateTime &&
                  new Date(currentYear, currentMonth, date) <=
                    new Date(
                      pickupDateTime.year,
                      pickupDateTime.mnth - 1,
                      pickupDateTime.day
                    );

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      if (!disabled && !(step === "drop" && beforePickup))
                        handleDateSelect(date);
                    }}
                    className={`h-8 flex items-center justify-center rounded cursor-pointer
                    ${
                      !date
                        ? ""
                        : disabled
                        ? "text-gray-400 cursor-not-allowed"
                        : isPickup || isDrop
                        ? "bg-[#0A0A0A] text-white font-semibold"
                        : inRange
                        ? "bg-[#F1EDFC]"
                        : "hover:bg-gray-200 text-gray-800"
                    }`}
                  >
                    {date || ""}
                  </div>
                );
              })}
            </div>

            {/* Time sliders */}
            <div className="flex gap-4">
              <div>
                <label className="block text-sm mb-1">
                  Hour: {format(hour)}
                </label>
                <input
                  type="range"
                  min={1}
                  max={12}
                  value={hour}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setHour(val);
                    pickupDateTime &&
                      setPickupDateTime({ ...pickupDateTime, hr: val });
                    dropDateTime &&
                      setDropDateTime({ ...dropDateTime, hr: val });
                  }}
                  className="w-full accent-primary h-0.5"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">
                  Minute: {format(minute)}
                </label>
                <input
                  type="range"
                  min={0}
                  max={45}
                  step={15}
                  value={minute}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    setMinute(val);
                    pickupDateTime &&
                      setPickupDateTime({ ...pickupDateTime, min: val });
                    dropDateTime &&
                      setDropDateTime({ ...dropDateTime, min: val });
                  }}
                  className="w-full accent-primary h-0.5"
                />
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    const newAm = ampm === "AM" ? "PM" : "AM";
                    setAmPm(newAm);
                    pickupDateTime &&
                      setPickupDateTime({ ...pickupDateTime, ampm: newAm });
                    dropDateTime &&
                      setDropDateTime({ ...dropDateTime, ampm: newAm });
                  }}
                  className="border border-N9 px-3 py-1 rounded cursor-pointer w-16 text-center bg-gray-100 hover:bg-gray-200 text-primary"
                >
                  {ampm}
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setStep("pickup");
                  setPickupDateTime(null);
                  setDropDateTime(null);
                  setHour(9);
                  setMinute(45);
                  setAmPm("AM");
                }}
                className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300"
              >
                Clear
              </button>
              <button
                onClick={handleOk}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleRangeDateTimePicker;
