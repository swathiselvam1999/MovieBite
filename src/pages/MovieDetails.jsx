import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTdmODE5YmU1Yzg2NjgxNGU3ZjVhODEwNDg1ZDYwMiIsIm5iZiI6MTcyNjY3MDcyNi4xMDAxMTQsInN1YiI6IjY2ZTVhMTIwNjRkYmIzYmUxODJlNTNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OB2qY8c1OsR2DLea1hqugvJReuBUuAuXgr5p10VXDxw",
    },
  };

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
          options
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [id]);

  // 🎯 Enhanced Loader with Animation
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!movie) return <div>Movie not found</div>;

  return (
    <main className="my-10 relative">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
          filter: "blur(10px)",
          zIndex: -1,
        }}
      ></div>

      {/* Overlay content */}
      <div className="relative p-8 bg-black bg-opacity-90 min-h-screen">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0 md:space-x-8">
          {/* Movie Poster */}
          <div className="w-full md:w-1/3">
            <img
              className="rounded-lg shadow-md md:items-center"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>

          {/* Movie Details */}
          <div className="w-full md:w-2/3 space-y-4 text-white">
            <h1 className="text-4xl font-bold">{movie.title}</h1>

            <div className="flex space-x-2">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="border border-gray-300 px-3 py-1 rounded-lg text-white bg-transparent hover:bg-gray-100 hover:text-black cursor-pointer transition duration-200"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="text-lg text-justify">{movie.overview}</p>
            <p className="text-md font-medium">
              Release Date: <span>{movie.release_date}</span>
            </p>

            <div className="flex items-center">
              <span>Rating: </span>
              <p className="ms-2 text-sm font-bold text-white">
                {movie.vote_average}
              </p>
              <svg
                className="w-4 h-4 text-yellow-300 me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>

            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-10"
            >
              Book Tickets
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MovieDetails;
