import React from 'react';
import Card from '../components/Card';
import { useFetch } from '../hooks/useFetch';

const MovieList = ({ apipath }) => {
  const { data: movies, loading } = useFetch(apipath); // Ensure useFetch returns a loading state

  if (loading) {
    return (
    <div className="flex justify-center items-center h-screen">
      <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid'></div>
    </div>
    )
  }

  return (
    <main className='p-4'>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto gap-10'>
        {movies.length > 0 ? (
          movies.map((movie) => <Card key={movie.id} movie={movie} />)
        ) : (
          <div className="text-center text-lg font-medium">No movies found.</div>
        )}
      </div>
    </main>
  );
};

export default MovieList;
