import React from 'react';
import './snack.css';


const popcorn = () => {
 
  return (
    <>
      <div className="w_s-p">
        <div className="w_box ">
          <img className="w_pop "src="w_images/l_popcorn.jpg" alt='popcorn'/>
          <p>고소한 팝콘 (Large)</p>
          <p>4,000 원 <i class="fa-solid fa-minus"></i> 4000kcal</p> 
        </div>
        <div className="w_box">
          <img className="w_pop"src="w_images/m_popcorn.jpg" alt='popcorn'/>
          <p>고소한 팝콘 (Medium)</p>
          <p>3,000 원 <i class="fa-solid fa-minus"></i> 3000kcal</p> 
        </div>
        <div className="w_box">
          <img className="w_pop"src="w_images/l_sweetpopcorn.jpg" alt='popcorn'/>
          <p>달달한 팝콘 (Large)</p>
          <p>6,000 원 <i class="fa-solid fa-minus"></i> 5000kcal</p> 
        </div>
        <div className="w_box">
          <img className="w_pop"src="w_images/m_sweetpopcorn.jpg" alt='popcorn'/>
          <p>달달한 팝콘 (Medium)</p>
          <p>5,000 원 <i class="fa-solid fa-minus"></i> 4000kcal</p> 
        </div>
        <div className="w_box">
          <img className="w_pop"src="w_images/l_hotpopcorn.jpg" alt='popcorn'/>
          <p>매콤한 팝콘 (Large)</p>
          <p>6,000 원 <i class="fa-solid fa-minus"></i> 5000kcal</p> 
        </div>
        <div className="w_box">
          <img className="w_pop"src="w_images/m_hotpopcorn.jpg" alt='popcorn'/>
          <p>매콤한 팝콘 (Medium)</p>
          <p>5,000 원 <i class="fa-solid fa-minus"></i> 4000kcal</p> 
        </div>
    </div>
    </>
  )
}

export default popcorn;