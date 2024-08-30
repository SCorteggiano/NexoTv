import React, { useState } from "react";
import MovieCard from "@/components/MovieCard/MovieCard";
import MovieDetail from "@/components/MovieDetail/MovieDetail";
import { useMovies } from "@/helpers/hooks";
import { IMovie, ICategory } from "@/interfaces";
import CategoryNavbar from "../CategoryNavbar/CategoryNavbar";
import { usePagination } from "@/context/pageContext"; // Importa el contexto de paginación
import { Pagination } from "flowbite-react";

const MoviesList: React.FC = () => {
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [searchTitle, setSearchTitle] = useState<string>("");

  const { movies, categories } = useMovies();
  const { currentPage, handlePageChange } = usePagination(); // Accede a la paginación
  const itemsPerPage = 20; // Cantidad de películas por página

  const handleCardClick = (movie: IMovie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  // Lógica para manejar la selección de múltiples categorías
  const handleSelectCategory = (id: number | null) => {
    if (id === null) {
      setSelectedCategories([]); // Limpiar todas las categorías seleccionadas si se hace clic en "All"
    } else {
      setSelectedCategories((prevSelectedCategories) =>
        prevSelectedCategories.includes(id)
          ? prevSelectedCategories.filter((catId) => catId !== id)
          : [...prevSelectedCategories, id]
      );
    }
  };

  // Filtrar las películas basadas en las categorías seleccionadas y el título
  const filteredMovies = movies.filter((movie: IMovie) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.some((categoryId) =>
        categories.find((cat: ICategory) => cat.id === categoryId)?.name === movie.category
      );

    const matchesTitle = searchTitle === "" || movie.title.toLowerCase().includes(searchTitle.toLowerCase());

    return matchesCategory && matchesTitle;
  });

  // Calcular los índices de las películas que se mostrarán en la página actual
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedMovies = filteredMovies.slice(startIndex, endIndex);

  return (
    <div>
      {/* Navbar de categorías para seleccionar múltiples categorías */}
      <CategoryNavbar
        categories={categories}
        selectedCategories={selectedCategories}
        onSelectCategory={handleSelectCategory}
      />

      {/* Filtro por título */}
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search by title..."
          className="p-2 border rounded"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />
      </div>

      {/* Mostrar películas paginadas y filtradas */}
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

      {/* Paginación */}
      <div className="flex justify-center my-6">
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(filteredMovies.length / itemsPerPage)} // Calcula el total de páginas
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default MoviesList;
