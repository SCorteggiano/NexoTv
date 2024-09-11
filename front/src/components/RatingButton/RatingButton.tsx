"use client";
import React, { useState } from "react";
import StarRatingMenu from "../StarRatingMenu/StarRatingMenu";

interface RatingButtonProps {
  movieId: string; 
}

const RatingButton: React.FC<RatingButtonProps> = ({ movieId }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <button className="cursor-pointer" onClick={toggleMenu}>
        <p className="bg-yellow-400 hover:bg-yellow-600 transition-all text-white px-4 py-2 rounded">
          Rate
        </p>
      </button>

      {showMenu && <StarRatingMenu movieId={movieId} />}
    </div>
  );
};

export default RatingButton;
