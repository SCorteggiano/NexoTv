/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import ContentCard from "@/components/ContentCard/ContentCard";
import MovieDetail from "@/components/MovieDetail/MovieDetail";
import SeriesDetail from "@/components/SeriesDetail/SeriesDetail";
import { IMovieCard, ISeriesCard } from "@/interfaces";
import { Carousel } from "flowbite-react";
import MoviesList from "@/components/MovieList/movieList";
import SeriesList from "@/components/SeriesList/SeriesList";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<
    IMovieCard | ISeriesCard | null
  >(null);

  const handleCardClick = (item: IMovieCard | ISeriesCard) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="Texto alternativo"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="Texto alternativo"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="Texto alternativo"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="Texto alternativo"
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="Texto alternativo"
          />
        </Carousel>
        <MoviesList />
        <SeriesList />
      </div>
      <div id="allContentContainer">
        <div id="contentCardsContainer">
          <ContentCard onCardClick={handleCardClick} />
        </div>
      </div>
      {selectedItem && "episodes" in selectedItem ? (
        <SeriesDetail
          serie={selectedItem as ISeriesCard}
          onClose={closeModal}
        />
      ) : selectedItem && "duration" in selectedItem ? (
        <MovieDetail movie={selectedItem as IMovieCard} onClose={closeModal} />
      ) : null}
    </div>
  );
}