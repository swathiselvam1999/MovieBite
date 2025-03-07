import { useState, useEffect } from 'react'

export const useFetch = (apipath, queryTerm ="") => {

    const [data, setData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTdmODE5YmU1Yzg2NjgxNGU3ZjVhODEwNDg1ZDYwMiIsIm5iZiI6MTcyNjY3MDcyNi4xMDAxMTQsInN1YiI6IjY2ZTVhMTIwNjRkYmIzYmUxODJlNTNlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OB2qY8c1OsR2DLea1hqugvJReuBUuAuXgr5p10VXDxw'
        }
      };
    
      useEffect(() => {
        async function fetchMovies() {
        
          const response = await fetch(`https://api.themoviedb.org/3/${apipath}?query=${queryTerm}`, options);
    
          const data = await response.json();
    
          setData(data.results);
        }
        
        fetchMovies();

      }, [apipath, queryTerm]);

  return ({ 
    data,
    queryTerm 
  });
};
