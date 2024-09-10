"use client";
import React, { useState, useMemo } from "react";
import SeriesCard from "@/components/SeriesCard/SeriesCard";
import SeriesDetail from "@/components/SeriesDetail/SeriesDetail";
import { useSeries } from "@/helpers/hooks";
import { ISeries, ICategory } from "@/interfaces";
import CategoryNavbar from "../CategoryNavbar/CategoryNavbar";
import { usePagination } from "@/context/pageContext";
import { Pagination } from "flowbite-react";
import { useSearch } from "@/context/searchContext";

const SeriesList: React.FC<{ enableFiltering: boolean }> = ({
  enableFiltering,
}) => {
  const [selectedSeries, setSelectedSeries] = useState<ISeries | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const { series } = useSeries();
  const { currentPage, handlePageChange } = usePagination();
  const itemsPerPage = 10;
  const { searchQuery } = useSearch();

  console.log(series)

  const handleCardClick = (series: ISeries) => {
    setSelectedSeries(series);
  };

  const closeModal = () => {
    setSelectedSeries(null);
  };

  const handleSelectCategory = (id: number | null) => {
    if (id === null) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories((prevSelectedCategories) =>
        prevSelectedCategories.includes(id)
          ? prevSelectedCategories.filter((catId) => catId !== id)
          : [...prevSelectedCategories, id]
      );
    }
  };

  const categories: ICategory[] = useMemo(() => {
    const allCategories: ICategory[] = [];

    series.forEach((serie: ISeries) => {
      serie.category.forEach((cat: string) => {
        if (!allCategories.find((c) => c.name === cat)) {
          allCategories.push({ id: allCategories.length + 1, name: cat });
        }
      });
    });

    return allCategories;
  }, [series]);

  const filteredSeries = series.filter((serie: ISeries) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((categoryId) =>
        serie.category.includes(
          categories.find((cat) => cat.id === categoryId)?.name || ""
        )
      );

    const matchesTitle =
      searchQuery === "" ||
      serie.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesTitle;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedSeries = filteredSeries.slice(startIndex, endIndex);

  return (
    <div>
      {enableFiltering && (
        <>
          <CategoryNavbar
            categories={categories}
            selectedCategories={selectedCategories}
            onSelectCategory={handleSelectCategory}
          />
        </>
      )}

      <div id="wholeContainer" className="m-6">
        <div
          id="seriesContainer"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {paginatedSeries.map((serie: ISeries) => (
            <SeriesCard
              key={serie.id}
              id={serie.id}
              image={serie.image}
              title={serie.title}
              duration={serie.duration}
              description={serie.description}
              onClick={() => handleCardClick(serie)}
            />
          ))}
        </div>
      </div>

      {selectedSeries && (
        <SeriesDetail serie={selectedSeries} onClose={closeModal} />
      )}

      <div className="flex justify-center my-6">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredSeries.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default SeriesList;
