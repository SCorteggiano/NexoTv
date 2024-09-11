"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

interface StarRatingMenuProps {
  movieId: string; // Identificador único de la película
}

const StarRatingMenu: React.FC<StarRatingMenuProps> = ({ movieId }) => {
  const [rating, setRating] = useState<number>(0);

  // Cargar el rating desde localStorage al montar el componente
  useEffect(() => {
    const storedRating = localStorage.getItem(`rating_${movieId}`);
    if (storedRating) {
      setRating(parseInt(storedRating, 10));
    }
  }, [movieId]);

  const handleStarClick = (index: number) => {
    setRating(index);
  };

  const saveRating = () => {
    // Guardar el rating en localStorage para la película específica
    localStorage.setItem(`rating_${movieId}`, rating.toString());
    Swal.fire("Thanks for your review!");
  };

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
      <button
        onClick={saveRating}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
      >
        Send
      </button>
    </div>
  );
};

export default StarRatingMenu;
