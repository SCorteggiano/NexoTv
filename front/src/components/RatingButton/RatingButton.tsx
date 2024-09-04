'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import StarRatingMenu from '../StarRatingMenu/StarRatingMenu';

const RatingButton = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        className="flex items-center justify-center rounded-full cursor-pointer border p-2"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={faStar} size="xl" className="text-yellow-400" />
        <p className="ml-2 text-2xl font-bold">Rate</p>
      </button>

      {showMenu && <StarRatingMenu />}
    </div>
  );
};

export default RatingButton;
