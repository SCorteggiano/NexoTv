"use client";
import LoadingSpinner from "@/components/Loading/Loading";
import { useMovies } from "@/helpers/hooks";
import { useEffect, useState } from "react";

const Movie = ({ params }: any) => {
  const { movies } = useMovies();
  const [movie, setMovie] = useState<any>(null);
  const movieId = params.id;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.voomly.com/embed/embed-build.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (movies && movieId) {
      const selectedMovie = movies.find((movie: any) => movie.id === movieId);
      setMovie(selectedMovie);
    }
  }, [movies, movieId]);

  if (!movie) return <LoadingSpinner/>;

  return (
    <div style={{ margin: "auto" }} className="h-auto w-10/12">
      {movie.contentUrl && movie.contentUrl.length > 0 && (
        <div dangerouslySetInnerHTML={{ __html: movie.contentUrl[0] }} />
      )}
    </div>
  );
};

export default Movie;
