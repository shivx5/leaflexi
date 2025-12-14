// DateTimePicker.jsx (Updated to show format: 02 Jan 2024 5:00 pm)
import React, { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

const DateTimePickerReact = ({ label = "Pick Date", onConfirm }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [hour, setHour] = useState("12");
  const [minute, setMinute] = useState("00");
  const [ampm, setAmPm] = useState("AM");

  const togglePicker = () => setOpen((prev) => !prev);

  const handleConfirm = () => {
    if (!date) return;
    let hours = parseInt(hour);
    if (ampm === "PM" && hours < 12) hours += 12;
    if (ampm === "AM" && hours === 12) hours = 0;

    const selectedDate = new Date(date);
    selectedDate.setHours(hours);
    selectedDate.setMinutes(parseInt(minute));

    setOpen(false);
    onConfirm?.(selectedDate);
  };

  return (
    <div className="relative w-full max-w-xs">
      <button
        onClick={togglePicker}
        className="w-full text-left border border-gray-300 p-3 rounded-md focus:outline-none "
      >
        {date ? (
          <span className="text-gray-800 font-medium">
            {format(
              new Date(
                date.setHours(
                  parseInt(hour) + (ampm === "PM" && hour !== "12" ? 12 : 0)
                )
              ),
              "dd MMM yyyy"
            )}{" "}
            {`${hour}:${minute} ${ampm.toLowerCase()}`}
          </span>
        ) : (
          <span className="text-gray-400">{label}</span>
        )}
      </button>

      {open && (
        <div className="absolute z-10 mt-2 p-2 top-0 right-0  bg-white border rounded-md shadow-lg w-[310px]">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            className={"text-sm"}
          />

          <div className="flex items-center gap-2 mt-3">
            <select
              className="border rounded px-2 py-1"
              value={hour}
              onChange={(e) => setHour(e.target.value)}
            >
              {Array.from({ length: 12 }, (_, i) => {
                const val = (i + 1).toString().padStart(2, "0");
                return <option key={val}>{val}</option>;
              })}
            </select>

            <span>:</span>

            <select
              className="border rounded px-2 py-1"
              value={minute}
              onChange={(e) => setMinute(e.target.value)}
            >
              {["00", "15", "30", "45"].map((m) => (
                <option key={m}>{m}</option>
              ))}
            </select>

            <select
              className="border rounded px-2 py-1"
              value={ampm}
              onChange={(e) => setAmPm(e.target.value)}
            >
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>

          <button
            className="mt-4 bg-primary text-white w-full py-2 rounded"
            onClick={handleConfirm}
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default DateTimePickerReact;
