
import Topnav from './H_Movie/main/Topnav';
import H_Movie from './H_Movie/H_Movie'
import B_Event from './B_Event/B_Event'
import {
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Topnav />
        <H_Movie />
        <B_Event />
    </BrowserRouter>
  )
}

export default App