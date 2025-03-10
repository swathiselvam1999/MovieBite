import { Navigate, Route, Routes } from "react-router-dom";
import { MovieDetails, MovieList, Search, PageNotFound } from "../pages";
import DarkLight from "../components/DarkLight";
import Successful from "../pages/Successful";

export const AllRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<Navigate to="/MovieBite" replace />} />
            <Route path="/MovieBite" element={<MovieList apipath="movie/now_playing" />} />
            <Route path="movie/:id" element={<MovieDetails />} />
            <Route path="movies/popular" element={<MovieList category="popular" apipath="movie/popular" />} />
            <Route path="movies/top" element={<MovieList category="top" apipath="movie/top_rated" />} />
            <Route path="movies/upcoming" element={<MovieList category="upcoming" apipath="movie/upcoming" />} />
            <Route path="search" element={<Search apipath="search/movie" />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/successful" element={<Successful />} />

        </Routes>
    )

}
