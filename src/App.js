
import Topnav from './H_Movie/main/Topnav';
import H_Movie from './H_Movie/H_Movie'
<<<<<<< HEAD
import B_Event from './B_Event/B_Event'
=======
import K_Ticket from './K_ticket/K_Ticket'
import B_Event from './B_Event/B_Event'
import W_Comp from './w_comp/w_comp'
import Footer from './w_comp/Footer';
>>>>>>> c5fd1f46780bd5c4a87853634fa8c5213521ef81
import {
  BrowserRouter,
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
        <Topnav />
<<<<<<< HEAD
        <H_Movie />
        <B_Event />
=======

        <H_Movie />
        <K_Ticket />
        <W_Comp />
        <B_Event />
        
        <Footer/>
>>>>>>> c5fd1f46780bd5c4a87853634fa8c5213521ef81
    </BrowserRouter>
  )
}

export default App