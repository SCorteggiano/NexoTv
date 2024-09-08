"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const StarRatingMenu = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index: number) => {
    setRating(index);
  };

  const thanksMessage = () => {
    Swal.fire("Thanks for your review!")
    setRating(0)
  }

  return (
    <div className="flex flex-col fixed bg-gray-600 items-center p-4 rounded-xl shadow-md w-64 m-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <FontAwesomeIcon
            key={star}
            icon={faStar}
            size="2x"
            className={`cursor-pointer ${
              star <= rating ? "text-yellow-400" : "text-gray-800"
            }`}
            onClick={() => handleStarClick(star)}
          />
        ))}
      </div>
      <button onClick={thanksMessage} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
        Send
      </button>
    </div>
  );
};

export default StarRatingMenu;
