import Page from "./nav/Page";
import {Routes, Route} from "react-router-dom";
import { useLocation } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
        <Route path='/ticket' element ={<Page />} />
    </Routes>
    </>
  );
}

export default App;