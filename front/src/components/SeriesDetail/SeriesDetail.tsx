/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ISeriesCard } from "@/interfaces";

interface SeriesDetailProps {
  serie: ISeriesCard | null;
  onClose: () => void;
}

const SeriesDetail: React.FC<SeriesDetailProps> = ({ serie, onClose }) => {
  if (!serie) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-black bg-opacity-80 border-violet p-6 rounded-lg shadow-lg max-w-lg w-full">
        <div className="flex justify-end">
          <button onClick={onClose} className="h-8 w-8 text-white text-2xl rounded-full bg-red-800 hover:bg-red-900">
            &times;
          </button>
        </div>
        <img
          className="w-full h-64 object-cover mb-4 rounded-xl"
          src={serie.image}
          alt={serie.title}
        />
        <h2 className="text-2xl font-bold mb-2">{serie.title}</h2>
        <p className="mb-4">{serie.description}</p>
        <p className="mb-4 font-semibold">Episodes: {serie.episodes}</p>
        <div className="flex justify-between">
          {/* Agregar Funcionalidades / Cambiar por Link */}
          <button className="bg-violet hover:bg-darkviolet transition-all text-white w-40 px-4 py-2 rounded">
            Play
          </button>
          <button className="bg-violet hover:bg-darkviolet transition-all text-white w-40 px-4 py-2 rounded">
            Episodes
          </button>
          <button className="bg-red-500 hover:bg-red-700 transition-all text-white px-4 py-2 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeriesDetail;
