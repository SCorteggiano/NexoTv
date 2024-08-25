import { gql, useQuery } from "@apollo/client";
import { IMovieCard } from "@/interfaces";

const GET_MOVIES = gql`
  query GetMovies {
    movies {
      id
      title
      description
      img
      duration
      categoryId
    }
  }
`;

const useMovies = () => {
  const { data, loading, error } = useQuery(GET_MOVIES);

  return {
    movies: data?.movies || [],
    loading,
    error,
  };
};

export default useMovies;