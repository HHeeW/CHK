import React, { Component } from 'react'
import Home from "../Home";
import './all.css';
import $ from 'jquery';
import Adver from './Adver';


function List(props){
  const lis = [];
  for(let i =0; i <props.img.length; i++){
    let t = props.img[i];
    lis.push(<li key={t.id}className="b_listBox"><img src={t.url} ></img>
    <p className='b_conTitle b_reserveTitle'>{t.name}</p>
            <p className='b_date'>{t.date}</p></li>)
  }
  return <><Home /><div className='b_conBox'>
  <ul className='b_conList'>
    {lis}
 </ul>
 <Adver />
</div>
</>
}

 function Reserve() {
  $('div.b_more').on("click",()=>{
    $('.b_conList').css("overflow","visible");
  })


  const imgi = [
    {id: 1, name : "닥터 스트레인지 : 대혼돈의 멀티버스 리미티드 포스터", url : "b_images/예매/img1.jpg",date :"2022.03.23 ~ 2022.04.07" },
    {id: 2, name : "닥터 스트레인지 : 대혼돈의 멀티버스 행운의 래플", url : "b_images/예매/img2.jpg",date :"2022.03.23 ~ 2022.04.07" },
    {id: 3, name : "앵커 CHK 필름마크", url : "b_images/예매/img3.jpg",date :"2022.03.23 ~ 2022.04.07" },
    {id: 4, name :" 로스트 시티 CHK 필름마크", url : "b_images/예매/img4.jpg",date :"2022.04.10 ~ 2022.04.25" },
    {id: 5, name : "극장판 귀멸의 칼날 : 무한열차편 CHK 필름마크", url : "b_images/예매/img5.jpg",date :"2022.03.23 ~ 2022.04.07" },
    {id: 6, name : "주술회전 개봉 11주차 현장 이벤트", url : "b_images/예매/img6.jpg",date :"2022.04.10 ~ 2022.04.25" },
    {id: 7, name : "스펜서 라스트 패키지", url : "b_images/예매/img7.jpg",date :"2022.04.28 ~ 2022.05.11" },
    {id: 8, name : "소설가의 명화 현장 증정 이벤트", url : "b_images/예매/img8.jpg",date :"2022.04.10 ~ 2022.04.25" },
    {id: 9, name : "우연과 상상 프리미어 DAY", url : "b_images/예매/img9.jpg",date :"2022.03.23 ~ 2022.04.07" },
    {id: 10, name : "신비한 동물들과 덤블도어의 비밀 CHK 필름마크", url : "b_images/예매/img10.jpg",date :"2022.04.10 ~ 2022.04.25" },
    {id: 11, name : "세븐틴 파워 오브 러브 : 더 무비 한정 이벤트", url : "b_images/예매/img11.jpg",date :"2022.03.23 ~ 2022.04.07" },
    {id: 12, name : "수퍼 소닉2 4DX 한정판 증정 이벤트", url : "b_images/예매/img12.jpg",date :"2022.03.23 ~ 2022.04.07" }
  ]
  return (
    <>
  
        <List img={imgi}/>
   
            
 
   
     
   
    </>
  )
}
export default Reserve;

