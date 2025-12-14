import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
function FAQCard({ SingleQuestion, line, from }) {
  const [active, setActive] = useState(false);
  const Question = SingleQuestion?.que;
  const Answer = SingleQuestion?.ans;

  // Handle key press for better keyboard navigation
  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      setActive(!active);
    }
  };

  return (
    <div
      className={` flex flex-col lg:gap-6 md:gap-3.5 gap-2 border-[1px] border-[#dadada]  rounded-md ${
        from === "carDetail" || "payment"
          ? "p-4 md:p-5"
          : "p-4 sm:p-5 md:p-6 lg:p-8"
      } ${from === "payment"}`}
      tabIndex={0} // Allow the div to be focusable
      onKeyDown={handleKeyPress} // Allow keyboard interaction
      role="button"
      aria-expanded={active} // ARIA attribute to indicate expanded state
      aria-controls={`answer-${SingleQuestion?.id}`} // Link the question to the answer
    >
      <div
        onClick={() => setActive(!active)}
        className="flex justify-between cursor-pointer"
      >
        <p
          id={SingleQuestion?.id}
          className="w-full sm:w-[70%] md:w-[80%] text-xs sm:text-sm lg:text-base text-black] line-clamp-2 font-medium"
          role="heading" // Use heading role for better semantics
          aria-level="3" // ARIA level for the heading (like h3)
        >
          {Question}
        </p>

        <div className="transition-transform duration-300">
          {active ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>

      {active && (
        <div
          id={`answer-${SingleQuestion?.id}`}
          className="text-[#666666] w-full sm:w-[70%] md:w-[80%] text-xs sm:text-sm lg:text-base"
          style={{
            transition: "max-height 0.3s ease-in-out",
            maxHeight: active ? "200px" : "0",
            overflow: "hidden",
          }}
        >
          {Answer}
        </div>
      )}

      {/* {line && <hr className="border-[#ddd] mt-4" />} */}
    </div>
  );
}

export default FAQCard;
