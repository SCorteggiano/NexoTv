'use client'
import React, { useState } from "react";
import MovieCard from "@/components/MovieCard/MovieCard";
import CategoryNavbar from "@/components/CategoryNavbar/CategoryNavbar";
import MovieDetail from "@/components/MovieDetail/MovieDetail";
import movies from "@/helpers/movies.helper";
import { IMovieCard } from "@/interfaces";

const Movies = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<IMovieCard | null>(null);

  const categories = [
    { id: 1, name: "Action" },
    { id: 2, name: "Sci-Fi" },
    { id: 3, name: "Drama" },
    { id: 4, name: "Horror" },
  ];

  const filteredMovies = selectedCategory
    ? movies.filter((movie) => movie.categoryId === selectedCategory)
    : movies;

  const handleCardClick = (movie: IMovieCard) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">MOVIES</h1>
      </div>
      <CategoryNavbar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div id="wholeContainer" className="m-6">
        <div
          id="movieContainer"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {filteredMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              img={movie.img}
              title={movie.title}
              description={movie.description}
              duration={movie.duration}
              onClick={() => handleCardClick(movie)}
            />
          ))}
        </div>
      </div>

      {selectedMovie && <MovieDetail movie={selectedMovie} onClose={closeModal} />}
    </div>
  );
};

export default Movies;
