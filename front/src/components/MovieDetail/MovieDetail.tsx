/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/navigation";
import { IMovieCard } from "@/interfaces";

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
    <div className="fixed inset-0 flex items-center justify-center bg-darkBackground bg-opacity-70">
      <div className="bg-darkBackground border-violet p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="h-8 w-8 text-darkText text-2xl rounded-full bg-red-800 hover:bg-red-900"
          >
            &times;
          </button>
        </div>
        <img
          className="w-full h-64 object-cover mb-4 rounded-xl"
          src={movie.image}
          alt={movie.title}
        />
        <h2 className="text-2xl font-bold mb-2 text-lightText">
          {movie.title}
        </h2>
        <p className="mb-4 text-lightText">{movie.description}</p>
        <p className="mb-4 font-semibold text-lightText">
          Duration: {movie.duration}
        </p>
        <div className="flex justify-between">
          <button
            onClick={handlePlay}
            className="bg-violet hover:bg-darkviolet transition-all text-white w-96 px-4 py-2 rounded"
          >
            Play
          </button>
          <button className="bg-red-500 hover:bg-red-700 transition-all text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
