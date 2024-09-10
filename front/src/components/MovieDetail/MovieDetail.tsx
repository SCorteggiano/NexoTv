/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/navigation";
import { IMovieCard } from "@/interfaces";
import RatingButton from "../RatingButton/RatingButton";
import Rating from "../Rating/Rating";

interface MovieDetailProps {
  movie: IMovieCard | null;
  onClose: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onClose }) => {
  const router = useRouter();

  if (!movie) return null;

  const handlePlay = () => {
    router.push(`/movie/${movie.id}`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="border-violet p-6 rounded-lg shadow-lg max-w-lg w-full bg-lightBackground dark:bg-darkBackground">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="h-8 w-8 text-2xl rounded-full bg-red-800 hover:bg-red-900"
          >
            &times;
          </button>
        </div>
        <img
          className="w-full h-64 object-cover mb-4 rounded-xl"
          src={movie.image}
          alt={movie.title}
        />
        <h2 className="text-2xl font-bold">{movie.title}</h2>
        
        {/* Convertir movie.id a string */}
        <Rating movieId={movie.id.toString()} />

        <p className="mb-4">{movie.description}</p>
        <p className="mb-4 font-semibold">
          Duration: {movie.duration}
        </p>
        <div className="flex justify-between">
          <button
            onClick={handlePlay}
            className="bg-violet hover:bg-darkviolet transition-all w-96 px-4 py-2 rounded"
          >
            Play
          </button>

          {/* Convertir movie.id a string */}
          <RatingButton movieId={movie.id.toString()} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
