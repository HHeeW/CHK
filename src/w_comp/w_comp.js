import React from 'react';
import Snack from './Snack';
import Giftshop from './GiftShop';
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
    <Routes>
        <Route path="/snack" element={<Snack />}></Route>
        <Route path="/giftshop" element={<Giftshop />}></Route>
    </Routes>
    </>
    
    );
}

export default App;