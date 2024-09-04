import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const FavoriteButton = () => {
  return (
    <Link href="/favorites" passHref className='mr-2'>
      <p className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-300 cursor-pointer">
        <FontAwesomeIcon icon={faHeart} size="lg" />
      </p>
    </Link>
  );
};

export default FavoriteButton;
