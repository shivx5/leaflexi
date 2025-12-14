import React, { useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0); // selected rating
  const [hover, setHover] = useState(0); // hovered rating

  return (
    <div className="flex gap-4">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          onClick={() => {
            setRating(star);
            // console.log(star);
          }}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className=" w-4 h-4 sm:w-8 sm:h-8 cursor-pointer transition-all duration-200"
          fill={star <= (hover || rating) ? "#facc15" : "none"}
          stroke="#facc15"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <polygon points="12,2 15,9 22,9 17,14 18.5,21 12,17 5.5,21 7,14 2,9 9,9" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
