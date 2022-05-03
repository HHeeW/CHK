import React from 'react'
import Movie_Page from './Movie_Page';
import List_Detail from '../List/List_Page';

const Movie_Page_List = () => {
  let movies_detail = List_Detail();
  let moive = window.location.pathname.substr(16, );
  let movie_Page_List = [];
  for(let i in movies_detail){
    if(moive-1 == i){
      movie_Page_List = <Movie_Page 
        key={parseInt(i)+1}
        id={parseInt(i)+1} 
        poster={movies_detail[i].poster}
        link={movies_detail[i].link}
        title={movies_detail[i].title}
        entitle={movies_detail[i].entitle}
        dir={movies_detail[i].dir}
        act={movies_detail[i].act}
        gen={movies_detail[i].gen}
        bas={movies_detail[i].bas} 
        age={movies_detail[i].age} 
        ticketing={movies_detail[i].ticketing} 
        open={movies_detail[i].open} 
        detail_title={movies_detail[i].detail_title}
        detail={movies_detail[i].detail}/>
      }
  }
    
    return movie_Page_List;
}
export default Movie_Page_List