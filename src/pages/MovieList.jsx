// import React, { useEffect, useState } from 'react'
// import Card from '../components/Card';


// const MovieList = ({ category }) => {

//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTdmODE5YmU1Yzg2NjgxNGU3ZjVhODEwNDg1ZDYwMiIsIm5iZiI6MTcyNjY3MDcyNi4xMDAxMTQsInN1YiI6IjY2ZTVhMTIwNjRkYmIzYmUxODJlNTNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OB2qY8c1OsR2DLea1hqugvJReuBUuAuXgr5p10VXDxw'
//     }
//   };

//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {

//       let url = "";
//       switch (category) {
//         case "popular":
//           url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
//           break;
//         case "top":
//           url = "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";
//           break;
//         case "upcoming":
//           url = "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
//           break;
//         default:
//           url = "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
//       }

//       const response = await fetch(url, options);

//       const data = await response.json();

//       setMovies(data.results);
//     }
//     fetchMovies();
//   }, [category])

//   return (
//     <main>
//       <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Movies</h1>
//       <div className='flex justify-between'>
//         <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mx-auto'>
//           {
//             movies.map((movie) => (
//               <Card key={movie.id} movie={movie} />
//             ))

//           }
//         </div>
//       </div>

//     </main>
//   )
// }

// export default MovieList;

import React from 'react'
import Card from '../components/Card';
import { useFetch } from '../hooks/useFetch';


const MovieList = ( {apipath} ) => {

  // console.log(apipath)

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