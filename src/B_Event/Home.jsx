import './home.css';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import $ from 'jquery';







export default class Event extends Component {
  render() {
  // Navbar 클릭시 표시
    const btn1 =()=>{ $('.b_menu1').mousedown(()=>{
      $('.b_menu2,.b_menu3').css("color","#000");
    }).mousedown(()=>{
          $('.b_menu1').css("color","#00c9c7")
      })
  }
  const btn2 = ()=>{
    $('.b_menu2').mousedown(()=>{
      $('.b_menu1,.b_menu3').css("color","#000");
    }).mouseup(()=>{
      $('.b_menu2').css("color","#00c9c7");
    })
  }
  
  const btn3 = ()=>{
    $('.b_menu3').mousedown(()=>{
      $('.b_menu1,.b_menu2').css("color","#000");
    }).mouseup(()=>{
      $('.b_menu3').css("color","#00c9c7");
    })
  }

    return (
    
  
        <>
        <div className='b_container'>
        <h1 className='b_title'><Link to="/"> EVENT</Link></h1>
        <ul className='b_nav'>
        <li><Link to="/preview" className='b_movie b_menu1' onClick={btn1} > 무대인사 / 시사회</Link></li>
        <li><Link to="/reserve" className='b_menu2'onClick={btn2} >영화 / 예매</Link></li>
        <li><Link to="/discount" className='b_menu3'onClick={btn3} >제휴 / 할인</Link></li>
        <li className='b_button'>
          <Link to="/login" className='b_myButton' >당첨자 발표</Link>
          <Link to="/timeout" className='b_myButton'>종료된 이벤트</Link>
        </li>
      </ul> 
      </div> 
      </>
   
 
  
    
    )
  }
}
