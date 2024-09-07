"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface RatingProps {
  rating: string;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const numericRating = parseFloat(rating);

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={faStar}
          size="lg"
          className={`${star <= numericRating ? "text-yellow-400" : "text-gray-800"}`}
        />
      ))}
    </div>
  );
};

export default Rating;
