import React from "react";
import MoviesList from "@/components/MovieList/movieList";

const Movies = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">MOVIES</h1>
      </div>
      <MoviesList enableFiltering={true}/>
    </>
  );
};

export default Movies;