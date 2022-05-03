import Nav from "./nav/Nav";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
        <Route path='/ticket' element ={<Nav />} />
    </Routes>
    </>

  );
}

export default App;