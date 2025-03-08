import React, { useState } from 'react';
import BackUp from '../assets/backup.jpg';
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {
  if (!movie) return <div>Movie not found</div>;

  const { title, overview, poster_path } = movie;
  const [imageLoading, setImageLoading] = useState(true);
  const image = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : BackUp;

  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full w-[20rem] hover:shadow-slate-700 mx-auto">
        
        {/* Image Container */}
        <div className="relative w-full h-auto flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-t-lg">
          
          {/* Loader Spinner */}
          {imageLoading && (
            <div className="absolute flex items-center justify-center w-full h-full">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
            </div>
          )}

          {/* Image */}
          <img
            className={`rounded-t-lg transition-opacity duration-500 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}
            src={image}
            alt={title}
            loading="lazy"
            onLoad={() => setImageLoading(false)}
          />
        </div>

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">
            {title}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
            {overview}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
