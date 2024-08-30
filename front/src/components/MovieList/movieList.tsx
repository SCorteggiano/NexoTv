import React, { useState } from "react";
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

  const { movies, categories } = useMovies();
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

  const filteredMovies = movies.filter((movie: IMovie) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some(
        (categoryId) =>
          categories.find((cat: ICategory) => cat.id === categoryId)?.name ===
          movie.category
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

      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search by title..."
          className="p-2 border rounded"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
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
