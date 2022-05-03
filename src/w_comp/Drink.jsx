import React from 'react'
import './snack.css';
// rafce



const drink = () => {
  return (
    <div className="w_s-p">
        <div className="w_box">
          <img className="w_pop"src="w_images/l_coke.jpg"/>
          <p>탄산음료 (Large)</p>
          <p>1,800 원 <i class="fa-solid fa-minus"></i> 300kcal</p> 
        </div>
        <div className="w_box">
          <img className="w_pop"src="w_images/m_coke.jpg"/>
          <p>탄산음료 (Medium)</p>
          <p>1,500 원 <i class="fa-solid fa-minus"></i> 250kcal</p> 
        </div>
        <div className="w_box">
          <img className="w_pop"src="w_images/americano_hot.jpg"/>
          <p>핫아메리카노</p>
          <p>2,000 원 <i class="fa-solid fa-minus"></i> 100kcal</p> 
        </div>
        <div className="w_box">
          <img className="w_pop"src="w_images/americano_ice.jpg"/>
          <p>아이스아메리카노</p>
          <p>2,000 원 <i class="fa-solid fa-minus"></i> 100kcal</p> 
        </div>
    </div>
  )
}

export default drink