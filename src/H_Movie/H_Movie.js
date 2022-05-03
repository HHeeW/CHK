import Movie from './movie/Movie'
import Movie_Page_List from './movie_detail/Movie_Page_List'
import {
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from './main/ScrollToTop';


function App() {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Movie />} />
        <Route path='/Movie_Page_List1' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List2' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List3' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List4' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List5' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List6' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List7' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List8' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List9' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List10' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List11' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List12' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List13' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List14' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List15' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List16' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List17' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List18' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List19' element ={<Movie_Page_List />} />
        <Route path='/Movie_Page_List20' element ={<Movie_Page_List />} />
      </Routes>
      </>
  )
}

export default App