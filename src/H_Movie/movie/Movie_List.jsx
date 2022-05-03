import React from 'react'
import Detail from './Movie_Detail'
import List_Page from '../List/List_Page';

const Movie_List = () => {
  
  let movies = List_Page();
    let movielist = [];
    for(let i in movies){
      movielist[i] = <Detail 
      key={parseInt(i)+1} 
      id={parseInt(i)+1} 
      title={movies[i].title} 
      poster={movies[i].poster} 
      age={movies[i].age} 
      ticketing={movies[i].ticketing} 
      open={movies[i].open} 
      detail={movies[i].detail}/>
    }
    return movielist;
}

export default Movie_List

