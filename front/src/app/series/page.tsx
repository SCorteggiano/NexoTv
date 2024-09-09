import React from "react";
import SeriesList from "@/components/SeriesList/SeriesList";

const Series = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-lightText dark:text-darkText">
          SERIES
        </h1>
      </div>
      <SeriesList enableFiltering={true} />
    </>
  );
};

export default Series;
