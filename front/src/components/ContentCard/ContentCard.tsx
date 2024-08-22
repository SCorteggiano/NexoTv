import React from "react";
import movies from "@/helpers/movies.helper";
import series from "@/helpers/series.helper";
import MovieCard from "../MovieCard/MovieCard";
import SeriesCard from "../SeriesCard/SeriesCard";
import { IMovieCard, ISeriesCard } from "@/interfaces";

interface ContentCardProps {
  onCardClick: (item: IMovieCard | ISeriesCard) => void;
}

const ContentCard: React.FC<ContentCardProps> = ({ onCardClick }) => {
  return (
    <div>
      <div
        id="contentContainer"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
      >
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            img={movie.img}
            title={movie.title}
            description={movie.description}
            duration={movie.duration}
            onClick={() => onCardClick(movie)}
          />
        ))}
        {series.map((serie) => (
          <SeriesCard
            key={serie.id}
            img={serie.img}
            title={serie.title}
            description={serie.description}
            episodes={serie.episodes}
            onClick={() => onCardClick(serie)}
          />
        ))}
      </div>
    </div>
  );
};

export default ContentCard;
