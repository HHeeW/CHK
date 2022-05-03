import React from 'react'
import './timeout.css';


export default function Timeout() {
  return (
   <>
   <div className='b_container'> 
    <div className='b_out'>
       <p>종료된 이벤트</p>
        <ul className='b_outList'>
            <li><a href="#">CGV극장별 방문 고객 대상 포장할인 프로모션</a><span>기간 : 2022.04.23</span></li>
            <li><a href="#">[4월은 너의 거짓말] 굿즈패키지</a><span>기간 : 2022.03.15</span></li>
            <li><a href="#">명씨네 시그니처 굿즈패키지</a><span>기간 : 2022.02.16</span></li>
            <li><a href="#">[로스트 시티]1주차 현장 증정 이벤트</a><span>기간 : 2022.02.02</span></li>
            <li><a href="#">[뮤지컬 킹키부츠 라이브]기대평 이벤트</a><span> 기간 : 2022.01.03</span></li>
            <li><a href="#">[슈퍼 소닉2] 선착순 무료 혜택</a><span>기간 : 2021.12.23</span></li>
            <li><a href="#">씨네샵X올리브영 기획 박스 최대 75% 특가!</a><span>기간 : 2021.04.18</span></li>
        </ul>

        {/* 다음페이지  */}
        <div className='b_pageNum'>
        <a href="#"><span class="material-symbols-outlined">arrow_back_ios</span></a>
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">7</a>
        <a href="#">8</a>
        <a href="#">9</a>
        <a href="#">10</a>
        <a href="#"><span class="material-symbols-outlined">arrow_forward_ios</span></a>
        </div>
    </div>
    </div>
   
   </>
  )
}
