import React from 'react'
import './header.css';
import logo from '../images/logo.png';

export default function Header() {
  return (
    <div className='k-container-header'>
      <div className='k-contaner-header-left'>
        <div><img src={logo} alt='logo' width={100}></img></div>
      </div>
      <div className='k-container-header-right'>
        <div>영화</div>
        <div>예매</div>
        <div>스토어</div>
        <div>이벤트</div>
      </div>
    </div>
  )
}
