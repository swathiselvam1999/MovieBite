import React from 'react'
import Card from '../components/Card';
import { useFetch } from '../hooks/useFetch';


const MovieList = ( {apipath} ) => {

  console.log(apipath)

 const {data:movies} = useFetch(apipath);

  return (
    <main className=''>
      <div className='flex justify-between'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto'>
          {
            movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))
          }
        </div>
      </div>

    </main>
  )
}

export default MovieList;