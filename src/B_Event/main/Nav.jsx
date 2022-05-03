import React, { Component } from 'react'
import './nav.css';
import {Link} from "react-router-dom"


export default class Nav extends Component {
  render() {
    return (
     <>
     <div className='b_container'>
        <div className='b_head'>
            <div className='b_imgbox'>
            <img src="b_images/logo.png" alt="logo" />
            </div>
            <Link to="/join" ><span class="material-symbols-outlined">person_add</span> <span className='b_sm'>회원가입</span></Link>
            <Link to="login"><span class="material-symbols-outlined">login</span><span className='b_sm'>로그인</span></Link>
            <Link to ="/login"><span class="material-symbols-outlined">person</span><span className='b_sm'>사용자</span></Link>
            <a href="#"><span class="material-symbols-outlined">support_agent</span><span className='b_sm'>고객센터</span></a>
      </div>        
        </div>
        <div className='b_Nav b_full'>
            <ul className='b_navGnb'>
                <li><a href="#">영화</a>
                <li className="b_lnb">
                      <Link to="/Movie"> 무비차트 </Link>
                     <a href="#">영화 소개</a>
                    </li>
                </li>
                <li><a href="/" className='b_point'>예매</a>
                <li className="b_lnb"> 
                <a href="#">영화 예매</a>
                </li>
                </li>
                <li><a href="#">스토어</a>
                <li className="b_lnb">
                <a href="#">스낵</a>
                <a href="#">굿즈</a>
             </li>
                 </li>
                <li><Link to="/preview">이벤트</Link> 
                <li className="b_lnb">
                <Link to="/preview">무대인사/시사회</Link>
                <Link to="/reserve">영화/예매</Link>
                <Link to="/discount">제휴할인</Link>
                </li>
                </li> 
                <li className='b_search'>
                    <input type="text" className="b_searchBox"/>
                  <button>
                    <span class="material-symbols-outlined">search</span></button>
                </li>
            </ul>
            </div>  
           
            
          
    
  
     
     </>
    )
  }
}              
