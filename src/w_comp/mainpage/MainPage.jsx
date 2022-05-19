import React from 'react'
import Slider from "react-slick";
import '../mainpage/mainpage.css';
import {Link} from "react-router-dom";


const MainPage = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true
      };
  return (
    
    <div className="w_mainpage">
        <div className="w_mainpage-in">
            <div className="w-b-top">
                <Slider {...settings}>
                    <img src="w_images/mainpage/slide1.png" alt='slide1'></img>
                    <img src="w_images/mainpage/slide2.png" alt='slide2'></img>
                    <img src="w_images/mainpage/slide3.png" alt='slide3'></img>
                    <img src="w_images/mainpage/slide4.png" alt='slide4'></img>
                </Slider>
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
                    <li><Link to="/snack"><i class="fa-regular fa-ice-cream w_icon"></i><p>스낵</p></Link></li>
                    <li><Link to="/giftshop"><i class="fa-regular fa-square-check w_icon"></i><p>굿즈</p></Link></li>
                    <li><Link to="/membership"><i class="fa-regular fa-user w_icon"></i><p>멤버십 혜택</p></Link></li>
                    <li><Link to="/login"><i class="fa-regular fa-clapperboard w_icon "></i><p>My상영관</p></Link></li>
                </ul>
            </div>
            <div className="w-1"></div>
</div>

  )
}

export default MainPage
