import React from 'react'
import '../mainpage/mainpage.css';
import {Link} from "react-router-dom";


const MainPage = () => {
  return (
    
    <div className="w_mainpage">
        <div className="w_mainpage-in">
            <div className="w-b-top">
             슬라이드 자리
            </div>


            <div className="w_b-middle">
                <Link to="/snack"><img className="w_snack-go" src="./w_images/mainpage/1.png"></img></Link>
                <Link to="/giftshop"><img className="w_giftshop-go" src="./w_images/mainpage/2.png"></img></Link>
                <Link to="/membership"><img className="w_membership-go" src="./w_images/mainpage/3.jpg"></img></Link>
                <img className="w_somi" src="./w_images/mainpage/somi.jpg"></img>
            </div>
  
  
            
        </div>
            <div className="w_b-footer">
                
                    <ul>
                        <li><Link to="/snack"><i class="fa-regular fa-ice-cream"></i><p>스낵</p></Link></li>
                        <li><Link to="/giftshop"><i class="fa-regular fa-square-check"></i><p>굿즈</p></Link></li>
                        <li><Link to="/membership"><i class="fa-regular fa-user"></i><p>멤버십 혜택</p></Link></li>
                        <li><i class="fa-regular fa-clapperboard"></i><p>My상영관</p></li>
                    </ul>
            </div>
            
            <div className="w-1"></div>
</div>

  )
}

export default MainPage
