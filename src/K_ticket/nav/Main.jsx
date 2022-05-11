import React from 'react'
import './main.css';
import {BrowserRouter,Routes, Route, Link} from "react-router-dom";

const main = () => {
  return (
    
    <div className='k-main-container'>
      <Link to='/movie'><div className='k-main-header'>더보기 <i className="fa-solid fa-arrow-right-long"></i></div></Link>
      <div className='k-main-main'>
          <div><img src='/K_images/닥터스트레인지.jpg' width='250px' height='300px'></img></div>
          <div><img src='/K_images/주술회전.jpg' width='250px' height='300px'></img></div>
          <div><img src='/K_images/공기살인.jpg' width='250px' height='300px'></img></div>
          <div><img src='/K_images/신비한 동물들과 덤블도어의 비밀.jpg' width='250px' height='300px'></img></div>
            <Link to='/ticket'><button>지금 예매하기 <i className="fa-solid fa-circle-chevron-right"></i></button></Link>
      </div>
    </div>
    
  )
}

export default main