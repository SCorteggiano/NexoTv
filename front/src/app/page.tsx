/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import MovieDetail from "@/components/MovieDetail/MovieDetail";
import SeriesDetail from "@/components/SeriesDetail/SeriesDetail";
import { IMovieCard, ISeriesCard } from "@/interfaces";
import { Carousel } from "flowbite-react";
import MoviesList from "@/components/MovieList/movieList";
import MainCarousel from "@/components/MainCarousel/MainCarousel";

export default function Home() {
  const [selectedItem, setSelectedItem] = useState<
    IMovieCard | ISeriesCard | null
  >(null);

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="bg-lightBackground dark:bg-darkBackground text-lightText dark:text-darkText">
      <MainCarousel />
      {/* <SeriesList enableFiltering={false}/> */}
      <div id="allContentContainer">
        <MoviesList enableFiltering={false} />
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
