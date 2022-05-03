import React, { Component } from 'react'
import './topbar.css';
import {Link} from "react-router-dom";
import '../B_Event/home.css';


export default class TopBar extends Component {
  render() {
    return (
      <>
      {/* <div className="w_container ">
        <img src="w_images/logo.png" alt='logo'></img>
        <ul className="w_play">
          <li><i class="fa-solid fa-user-large"></i> MyPage</li>
          <i class="fa-solid fa-minus"></i>
          <li><i class="fa-solid fa-video"></i> Buy</li>
        </ul>
        <ul className="w_top">
              <li><Link to="/snack"> <i class="fa-solid fa-star"></i> Snack <i class="fa-solid fa-star"></i></Link></li>
              <span><i class="fa-solid fa-minus"></i></span>
              <li><Link to="/giftshop"> <i class="fa-solid fa-star"></i> Gift-Shop <i class="fa-solid fa-star"></i> </Link></li>
        </ul>
      </div> */}

      <div className='b_container'>
        <h1 className='b_title'><Link to="/snack">스토어</Link></h1>
        <ul className='w_play'>
        <li><Link to="/snack" ><i class="fa-solid fa-star"></i> Snack </Link></li>
        <li><Link to="/giftshop" ><i class="fa-solid fa-star"></i>  Gift-Shop</Link></li>
      </ul> 
      </div> 
      
      </> 
    )
  }
}
