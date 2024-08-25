"use client";
import React, { useState } from "react";
import MovieCard from "@/components/MovieCard/MovieCard";
import MovieDetail from "@/components/MovieDetail/MovieDetail";
import { useMovies } from "@/helpers/hooks";
import { IMovie } from "@/interfaces";

const MoviesList: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);

  const { movies } = useMovies();

  const handleCardClick = (movie: IMovie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <div id="wholeContainer" className="m-6">
        <div
          id="movieContainer"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {movies.map((movie: IMovie) => (
            <MovieCard
              key={movie.id}
              image={movie.image}
              title={movie.title}
              description={movie.description}
              duration={movie.duration}
              onClick={() => handleCardClick(movie)}
            />
          ))}
        </div>
      </div>

      {selectedMovie && (
        <MovieDetail movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
};

export default MoviesList;
