import React from 'react'
import BackUp from '../assets/backup.jpg'
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {

  const { title, overview, poster_path } = movie;

  const image = poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : BackUp;

  return (
    
    <>
    
    <Link to={`/MovieBite/movie/${movie.id}`}>
      <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-full hover:shadow-slate-700">

        <div>
          <img className="rounded-t-lg" src={image} alt={title} />
        </div>

        <div className="p-5">
          
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-1">{title}</h5>
        
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">{overview}</p>

        </div>
      </div>
    </Link>
    
    </>
  )
}

export default Card