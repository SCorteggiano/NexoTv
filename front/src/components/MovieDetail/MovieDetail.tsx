/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IMovieCard } from "@/interfaces";

interface MovieDetailProps {
  movie: IMovieCard | null;
  onClose: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-black bg-opacity-80 border-violet p-6 rounded-lg shadow-lg max-w-lg w-full">
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
          src={movie.img}
          alt={movie.title}
        />
        <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
        <p className="mb-4">{movie.description}</p>
        <p className="mb-4 font-semibold">Duration: {movie.duration}</p>
        <div className="flex justify-between">
          {/* Agregar Funcionalidades / Cambiar por Link */}
          <button className="bg-violet hover:bg-darkviolet transition-all text-white w-96 px-4 py-2 rounded">
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
