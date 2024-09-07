"use client";
import React, { useState, useMemo } from "react";
import MovieCard from "@/components/MovieCard/MovieCard";
import MovieDetail from "@/components/MovieDetail/MovieDetail";
import { useMovies } from "@/helpers/hooks";
import { IMovie, ICategory } from "@/interfaces";
import CategoryNavbar from "../CategoryNavbar/CategoryNavbar";
import { usePagination } from "@/context/pageContext";
import { Pagination } from "flowbite-react";
import { useSearch } from "@/context/searchContext"; // Importar el contexto

const MoviesList: React.FC<{ enableFiltering: boolean }> = ({ enableFiltering }) => {
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const { movies } = useMovies();
  const { currentPage, handlePageChange } = usePagination();
  const itemsPerPage = 10;
  const { searchQuery } = useSearch(); // Obtener la búsqueda global

  const handleCardClick = (movie: IMovie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
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

  // Extrae y construye una lista única de categorías
  const categories: ICategory[] = useMemo(() => {
    const allCategories: ICategory[] = [];

    movies.forEach((movie: IMovie) => {
      movie.category.forEach((cat: string) => {
        if (!allCategories.find((c) => c.name === cat)) {
          allCategories.push({ id: allCategories.length + 1, name: cat });
        }
      });
    });

    return allCategories;
  }, [movies]);

  const filteredMovies = movies.filter((movie: IMovie) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((categoryId) =>
        movie.category.includes(
          categories.find((cat) => cat.id === categoryId)?.name || ""
        )
      );

    const matchesTitle =
      searchQuery === "" ||
      movie.title.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesTitle;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedMovies = filteredMovies.slice(startIndex, endIndex);

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
          id="movieContainer"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {paginatedMovies.map((movie: IMovie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
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

      <div className="flex justify-center my-6">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredMovies.length / itemsPerPage)}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default MoviesList;

