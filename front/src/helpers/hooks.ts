import { IMovie, ISeries } from "@/interfaces";
import { gql, useQuery } from "@apollo/client";

export enum Type {
  channel = 'channel',
  movie = 'movie',
  series = 'series',
}

const GET_CONTENT = gql`
  query ContentAll($paginationContentArgs: PaginationContentArgs!) {
    contentAll(paginationContentArgs: $paginationContentArgs) {
      id
      title
      description
      image
      duration
      category
      contentUrl
      type
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
      userImage
      roles
    }
  }
`;

export const useMovies = () => {
  const { data, loading, error } = useQuery(GET_CONTENT, {
    variables: {
      paginationContentArgs: {
        limit: 12,
        offset: 0,
      },
    },
  });

  return {
    movies: data?.contentAll?.filter((item: IMovie) => item.type === Type.movie) || [],
    loading,
    error,
  };
};

export const useSeries = () => {
  const { data, loading, error } = useQuery(GET_CONTENT, {
    variables: {
      paginationContentArgs: {
        limit: 50,
        offset: 0,
      },
    },
  });

  return {
    series: data?.contentAll?.filter((item: any) => item.type === Type.series) || [],
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
