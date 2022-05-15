import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './main.css'

const main = () => {
  const aa = 'true';
  return (
    <div className='k-main-container'>
      <div className='k-main-top'></div>
      <div className='k-main-bottom'>
        <div className='k-main-bottom-left'>
          <div className='k-main-bottom-left-title'>짜릿한 범죄오락액션이 온다!</div>
          <div className='k-main-bottom-left-actor'>
            <div>공효진 · 류준열 · 조정석</div>
              <Link to={'/ticket'} state={13}><div className='k-main-bottom-left-ticket'>지금 예매하기 <i class="fa-solid fa-arrow-right"></i></div></Link>
          </div>
        </div>
        <div className='k-main-bottom-right'><img src='/K_images/뺑반2.jpg' width='250'></img></div>
      </div>
    </div>
  )
}

export default main