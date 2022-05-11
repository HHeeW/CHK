import React, {useState} from 'react'
import List_Page from '../List/List_Page';
import { Search } from '@styled-icons/material'
import './main.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import Movie_Page_List from '../movie_detail/Movie_Page_List';

const Movie_Search = () => {
  let [movie_name, setMovie_name] = useState("")
  const movies = List_Page();

  const search = () =>{
    Value()
  }
  const Enter = (e) =>{
    if(e.key === 'Enter'){
      Value();
    }
  }
  const Value = () =>{
    console.log(movie_name)
    for(let i in movies){
      if(movie_name != ""){
        let entitle = movies[i].entitle.toUpperCase()
        if(movies[i].title.includes(movie_name) || entitle.includes(movie_name.toUpperCase())){
          window.location.href = `/Movie_Page_List/${parseInt(i)+1}`;
        }
      }
    }
  }

  return (
    <>
      <input className='H_SearchText' type={"text"}
        placeholder="영화검색"
        onKeyDown={Enter}  
        onChange={(movie_value) => setMovie_name(movie_value.target.value)}>
        
      </input>
      <button className='H_SearchBox' onClick={search}><Search size={30} /></button>
  </>
  )
}

export default Movie_Search