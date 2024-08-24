/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ISeriesCard } from "@/interfaces";

const SeriesCard: React.FC<ISeriesCard & { onClick: () => void }> = ({
  img,
  title,
  description,
  episodes,
  onClick,
}) => {
  return (
    <div className="w-full max-w-xs m-5 text-center cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden rounded-lg">
        <img
          className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:blur-sm"
          src={img}
          alt={title}
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
          <p className="text-white mb-2 text-sm">{description}</p>
          <p className="text-white text-lg font-extrabold">Episodes: {episodes}</p>
        </div>
      </div>
      <h2 className="mt-2 text-lg font-bold">{title}</h2>
    </div>
  );
};

export default SeriesCard;
