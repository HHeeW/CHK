import React from 'react'
import Movie_Page from './Movie_Page';
import List_Detail from '../List/List_Page';

const Movie_Page_List = () => {
  let movies = List_Detail();
  let moive = window.location.pathname.substr(17, );
  let movie_Page_List = [];
  for(let i in movies){
    if(moive-1 == i){
      movie_Page_List = <Movie_Page 
        key={parseInt(i)+1}
        id={parseInt(i)+1} 
        poster={movies[i].poster}
        link={movies[i].link}
        title={movies[i].title}
        entitle={movies[i].entitle}
        dir={movies[i].dir}
        act={movies[i].act}
        gen={movies[i].gen}
        bas={movies[i].bas} 
        age={movies[i].age} 
        ticketing={movies[i].ticketing} 
        open={movies[i].open} 
        detail_title={movies[i].detail_title}
        detail={movies[i].detail}/>
      }
  }
    
    return movie_Page_List;
}
export default Movie_Page_List