"use client";
import React, { useState, useMemo } from "react";
import MovieCard from "@/components/MovieCard/MovieCard";
import MovieDetail from "@/components/MovieDetail/MovieDetail";
import { useMovies } from "@/helpers/hooks";
import { IMovie, ICategory } from "@/interfaces";
import CategoryNavbar from "../CategoryNavbar/CategoryNavbar";
import { usePagination } from "@/context/pageContext";
import { Pagination } from "flowbite-react";

const MoviesList: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [searchTitle, setSearchTitle] = useState<string>("");

  const { movies } = useMovies();
  const { currentPage, handlePageChange } = usePagination();
  const itemsPerPage = 20;

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
      searchTitle === "" ||
      movie.title.toLowerCase().includes(searchTitle.toLowerCase());

    return matchesCategory && matchesTitle;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedMovies = filteredMovies.slice(startIndex, endIndex);

  return (
    <div>
      <CategoryNavbar
        categories={categories}
        selectedCategories={selectedCategories}
        onSelectCategory={handleSelectCategory}
      />

      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative m-5">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          onChange={(e) => setSearchTitle(e.target.value)}
          value={searchTitle}
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-black focus:ring-violet focus:border-darkviolet"
          placeholder="Search Movies"
          required
        />
        <button
          type="submit"
          className="absolute end-2.5 bottom-2.5 bg-violet hover:bg-darkviolet focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Search
        </button>
      </div>

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
