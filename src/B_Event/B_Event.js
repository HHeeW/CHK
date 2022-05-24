import Reserve from './page/Reserve'
import Timeout from './page/Timeout'
import Preview from './page/Preview';
import Discount from './page/Discount';
import Login from './page/Login';
import Join from './page/Join';
import {
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <>
 
        <Routes>
            <Route path="/preview" element={<Preview/>}/>
            <Route path="/reserve" element={<Reserve/>} />
            <Route path="/discount" element={<Discount />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/timeout" element={<Timeout />} /> 
            <Route path="/join" element={<Join />} />
      </Routes> 
      </>
  );
}
export default App;
