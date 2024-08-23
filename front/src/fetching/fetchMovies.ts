import { IMovie, ISeries } from "@/interfaces";

export const fetchMovies = async () => {
    const response = await fetch("TU_URL_DE_GRAPHQL", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
                query GetMovies {
                    movies {
                        id
                        title
                        description
                        releaseDate
                        genre
                        rating
                    }
                }
            `
        }),
    });
    const data = await response.json();
    return data.data.movies;
}


export const fetchSeries = async () => {
    const response = await fetch("TU_URL_DE_GRAPHQL", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `
                query GetSeries {
                    series {
                        id
                        title
                        description
                        seasons
                        genre
                        rating
                    }
                }
            `
        }),
    });
    const data = await response.json();
    return data.data.series;
}
