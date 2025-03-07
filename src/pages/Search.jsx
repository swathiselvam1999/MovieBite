import React from 'react'
import Card from '../components/Card';
import { useFetch } from '../hooks/useFetch';
import { useSearchParams } from 'react-router-dom';

const Search = ({apipath}) => {

  const [searchparams] = useSearchParams();
  const queryTerm = searchparams.get("q");

  const {data:movies} = useFetch(apipath, queryTerm);

  return (
    <main>

      <section>
       <p className='text-3xl text-gray-800 mb-3 dark:text-white'>
        {movies.length === 0 ? `No result found for (${queryTerm})` : `Results for (${queryTerm})`}
       </p>
      </section>

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

export default Search;