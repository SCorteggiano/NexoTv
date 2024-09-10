"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface RatingProps {
  movieId: string; // Identificador único de la película
}

const Rating: React.FC<RatingProps> = ({ movieId }) => {
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    // Cargar el rating desde localStorage usando el movieId
    const storedRating = localStorage.getItem(`rating_${movieId}`);
    if (storedRating) {
      setRating(parseInt(storedRating, 10));
    }
  }, [movieId]);

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={faStar}
          size="lg"
          className={`${star <= rating ? "text-yellow-400" : "text-gray-800"}`}
        />
      ))}
    </div>
  );
};

export default Rating;
