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
  query GetUser {
    user {
      name
      email
      phone
      suscription
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


export const useUserData = () => {
  const { data, loading, error } = useQuery(GET_USER_DATA);

  return {
    user: data?.user || null,
    loading,
    error,
  };
};