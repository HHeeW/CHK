import React from 'react'
import './snack.css';

const side = () => {
  return (
    <div className="w_s-p">
        <div className="w_box">
          <img className="w_pop"src="w_images/nacho.jpg" alt='nach'/>
          <p>나쵸</p>
          <p>3,500 원 <i class="fa-solid fa-minus"></i> 250kcal</p> 
        </div>
        <div className="w_box">
          <img className="w_pop"src="w_images/hotd.jpg" alt='hotd'/>
          <p>핫도그</p>
          <p>2,500 원 <i class="fa-solid fa-minus"></i> 300kcal</p> 
        </div>
        <div className="w_box">
          <img className="w_pop"src="w_images/squid.jpg"/>
          <p>징어 징어 오징어</p>
          <p>4,500 원 <i class="fa-solid fa-minus"></i> 390kcal</p> 
        </div>
    </div>
  )
}

export default side