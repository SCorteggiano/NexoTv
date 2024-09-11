"use client";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { gql, useQuery } from "@apollo/client";

const GET_RATE = gql`
  query GetRate($contentId: String!) {
    getRate(contentId: $contentId)
  }
`;

interface RatingProps {
  movieId: string; // Identificador único de la película
}

const Rating: React.FC<RatingProps> = ({ movieId }) => {
  const [rating, setRating] = useState<number>(0);

  // Obtener el rating promedio desde el backend
  const { data: rateData } = useQuery(GET_RATE, {
    variables: { contentId: movieId },
  });

  useEffect(() => {
    if (rateData?.getRate) {
      setRating(rateData.getRate);
    }
  }, [rateData]);

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
