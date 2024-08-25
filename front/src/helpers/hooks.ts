import { gql, useQuery } from "@apollo/client";

const GET_MOVIES = gql`
  query ContentAll($paginationContentArgs: PaginationContentArgs!) {
    contentAll(paginationContentArgs: $paginationContentArgs) {
      id
      title
      description
      image
      duration
      category
      contentUrl
    }
  }
`;

const useMovies = () => {
  const { data, loading, error } = useQuery(GET_MOVIES, {
    variables: {
      paginationContentArgs: {
        limit: 12,
        offset: 0,
      },
    },
  });

  return {
    movies: data?.contentAll || [],
    loading,
    error,
  };
};

export default useMovies;
