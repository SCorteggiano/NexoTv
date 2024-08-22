import { IMovie, ISeries } from "@/interfaces";

export const fetchMovies = async (movie: IMovie[]) => {
    const response = await fetch("http://localhost:3000/movies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(movie),
    });
    const data = await response.json();
    return data;
}

export const fetchSeries = async (serie: ISeries[]) => {
    const response = await fetch("http://localhost:3000/movies", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(serie),
    });
    const data = await response.json();
    return data;
}

