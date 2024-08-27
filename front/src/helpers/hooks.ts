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

const GET_SERIES = gql`
  query SeriesAll($paginationSeriesArgs: PaginationSeriesArgs!) {
    seriesAll(paginationSeriesArgs: $paginationSeriesArgs) {
      id
      title
      description
      image
      caps
      category
    }
  }
`;

const GET_USER_DATA = gql`
  query User($userId: String!) {
    user(id: $userId) {
      id
      email
      firstName
      lastName
      isActive
    }
  }
`;

export const useMovies = () => {
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

export const useSeries = () => {
  const { data, loading, error } = useQuery(GET_SERIES, {
    variables: {
      paginationSeriesArgs: {
        limit: 12,
        offset: 0,
      },
    },
  });

  return {
    series: data?.seriesAll || [],
    loading,
    error,
  };
};

export const useUserData = (userId: string) => {
  const { data, loading, error } = useQuery(GET_USER_DATA, {
    variables: { userId },
  });

  return {
    user: data?.user || null,
    loading,
    error,
  };
};
