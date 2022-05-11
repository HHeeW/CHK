import React from 'react'
import './snack.css';


const Combo = () => {
  return (
    <div className="w_s-p">
        <div className="w_combox">
          <img className="w_pop"src="w_images/CHKcombo.jpg"/>
          <p>CHK 콤보</p>
          <p className="w_combo-sub">( 팝콘1L + 탄산음료2M ) </p>
          <p>6,000 원 <i class="fa-solid fa-minus"></i> 350kcal</p> 
        </div>
        <div className="w_combox">
          <img className="w_pop"src="w_images/sset.jpg"/>
          <p>혼자서 세트</p>
          <p className="w_combo-sub">( 팝콘1M + 탄산음료1M )</p>
          <p>4,500 원 <i class="fa-solid fa-minus"></i> 250kcal</p> 
        </div>
        <div className="w_combox">
          <img className="w_pop"src="w_images/lset.jpg"/>
          <p>다같이 세트</p>
          <p className="w_combo-sub">( 팝콘2L + 탄산음료2L )</p>
          <p>10,500 원 <i class="fa-solid fa-minus"></i> 1000kcal</p> 
        </div>
    </div>
  )
}

export default Combo