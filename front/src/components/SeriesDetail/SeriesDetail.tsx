/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/navigation";
import { ISeriesCard } from "@/interfaces";
import RatingButton from "../RatingButton/RatingButton";
import Rating from "../Rating/Rating";

interface SeriesDetailProps {
  serie: ISeriesCard | null;
  onClose: () => void;
}

const SeriesDetail: React.FC<SeriesDetailProps> = ({ serie, onClose }) => {
  const router = useRouter();
  if (!serie) return null;

  const handlePlay = () => {
    router.push(`/serie/${serie.id}`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-black bg-opacity-80 border-lightViolet p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="h-8 w-8 text-white text-2xl rounded-full bg-red-800 hover:bg-red-900"
          >
            &times;
          </button>
        </div>
        <img
          className="w-full h-64 object-cover mb-4 rounded-xl"
          src={serie.image}
          alt={serie.title}
        />
        <h2 className="text-2xl font-bold mb-2 text-white">{serie.title}</h2>
        <Rating movieId={serie.id.toString()} />

        <p className="mb-4 text-gray-300">{serie.description}</p>
        <p className="mb-4 font-semibold text-gray-400">
          Episodes: {serie.duration}
        </p>
        <div className="flex justify-between">
          <button
            onClick={handlePlay}
            className="bg-violet hover:bg-darkviolet transition-all w-96 px-4 py-2 rounded"
          >
            Play
          </button>
          
          <RatingButton movieId={serie.id.toString()} />
        </div>
      </div>
    </div>
  );
};

export default SeriesDetail;
