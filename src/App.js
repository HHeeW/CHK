
import Topnav from './H_Movie/main/Topnav';
import H_Movie from './H_Movie/H_Movie'
import K_Ticket from './K_ticket/K_Ticket'
import B_Event from './B_Event/B_Event'
import W_Comp from './w_comp/w_comp'
import Footer from './w_comp/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
function App() {
  return (
    <BrowserRouter>
        <Topnav />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>

        <H_Movie />
        <K_Ticket />
        <W_Comp />
        <B_Event />
        
        <Footer/>
    </BrowserRouter>
  )
}

export default App