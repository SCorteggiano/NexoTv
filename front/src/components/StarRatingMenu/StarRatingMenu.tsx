"use client";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { gql, useMutation, useQuery } from "@apollo/client";

const GET_RATE = gql`
  query Query($contentId: String!) {
  getRate(contentId: $contentId)
}
`;

const UPDATE_CONTENT = gql`
  mutation UpdateContent($updateContentInput: UpdateContentInput!) {
    updateContent(updateContentInput: $updateContentInput) {
      id
    }
  }
`;

interface StarRatingMenuProps {
  movieId: string; // Identificador único de la película
}

const StarRatingMenu: React.FC<StarRatingMenuProps> = ({ movieId }) => {
  const [rating, setRating] = useState<number>(0);

  // Consultar el rating actual del contenido desde el backend
  const { data: rateData } = useQuery(GET_RATE, {
    variables: { contentId: movieId },
  });

  const [updateContent] = useMutation(UPDATE_CONTENT);

  // Cargar el rating desde el backend al montar el componente
  useEffect(() => {
    if (rateData?.getRate) {
      setRating(rateData.getRate);
    }
  }, [rateData]);

  const handleStarClick = (index: number) => {
    setRating(index);
  };

  const saveRating = async () => {
    try {
      await updateContent({
        variables: {
          updateContentInput: {
            id: movieId,
            amount: rating,
          },
        },
      });
      Swal.fire("Thanks for your review!");
    } catch (error) {
      Swal.fire("Error!", "There was an error saving your rating.", "error");
    }
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
