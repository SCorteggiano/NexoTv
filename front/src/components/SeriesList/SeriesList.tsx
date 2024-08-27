"use client";
import React, { useState } from "react";
import SeriesCard from "@/components/SeriesCard/SeriesCard";
import SeriesDetail from "@/components/SeriesDetail/SeriesDetail";
import { useSeries } from "@/helpers/hooks";
import { ISeriesCard } from "@/interfaces";
import { ISeries } from "@/interfaces";

const SeriesList: React.FC = () => {
  const [selectedSerie, setSelectedSerie] = useState<ISeriesCard | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);

  const { series } = useSeries();

  const handleCardClick = (serie: ISeriesCard) => {
    setSelectedSerie(serie);
  };

  const closeModal = () => {
    setSelectedSerie(null);
  };

  const filteredSeries = categoryFilter
  ? series.filter((serie: ISeries) => serie.category === categoryFilter)
  : series;

  return (
    <div>
         {/* <div className="mb-4 text-center">
        <select
          className="border p-2"
          value={categoryFilter || ""}
          onChange={(e) => setCategoryFilter(e.target.value || null)}
        >
          <option value="">All Categories</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
      </div> */}
      <div id="wholeContainer" className="m-6">
        <div
          id="movieContainer"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {series.map((series: ISeries) => (
            <SeriesCard
              key={series.id}
              img={series.img}
              title={series.title}
              description={series.description}
              episodes={series.episodes}
              onClick={() => handleCardClick(series)}
            />
          ))}
        </div>
      </div>

      {selectedSerie && (
        <SeriesDetail serie={selectedSerie} onClose={closeModal} />
      )}
    </div>
  );
};

export default SeriesList;