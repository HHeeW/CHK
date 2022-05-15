import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './main.css';



export default function Main() {
    const imgBox =[
        {id: 1, name : "닥터 스트레인지 : 대혼돈의 멀티버스 리미티드 포스터", url : "b_images/예매/img1.jpg",date :"2022.03.23 ~ 2022.04.07" },
        {id: 2, name : "해리포터 죽음의 성물2 시사회", url : "b_images/시사회/img2.jpg",date :"2022.03.23 ~ 2022.04.07" },
        {id: 3, name : "아시아나항공 마일리지로 영화 무료", url : "b_images/할인/img1.jpg",date :"2022.04.30 ~ 2022.06.30" },
        {id: 4, name : "닥터 스트레인지 : 대혼돈의 멀티버스 행운의 래플", url : "b_images/예매/img2.jpg",date :"2022.03.23 ~ 2022.04.07" },
        {id: 5, name : "앵커 VIP 시사회", url : "b_images/시사회/img3.jpg",date :"2022.03.23 ~ 2022.04.07" }, 
        {id: 6, name : "CHK에서 하나머니 하나로 OK!", url : "b_images/할인/img2.jpg",date :"2022.04.30 ~ 2022.06.30" },
        {id: 7, name : "앵커 CHK 필름마크", url : "b_images/예매/img3.jpg",date :"2022.03.23 ~ 2022.04.07" },
        {id: 8, name :" 주술회전 무례한 시사회", url : "b_images/시사회/img4.jpg",date :"2022.04.10 ~ 2022.04.25" },
        {id: 9, name : "일주일간 어디서나 영화 1천원!", url : "b_images/할인/img3.jpg",date :"2022.04.30 ~ 2022.06.30" }
      ];
    const img2 =[];
    for(let i in imgBox){
      img2.push(
            <>
            <li className='b_lala' key={imgBox.id}>
              <img src={imgBox[i].url} alt={imgBox[i].id} />
              <h3>{imgBox[i].name}</h3>
              <p>{imgBox[i].date}</p>
            </li>
            </>  
      )
    }
  return (
    <>
     <div className='b_etcBox'>
         <div className='b_etc'>
          <div className='b_notice'>
            <Link to ="notice" className='b_morebtn'>더보기<i className="fa-solid fa-arrow-right-long"></i></Link>
              <p className='b_Qna'>공지사항</p>
            <ul className='noticeList'> 
              <li><a href="#"> [행사/이벤트] 닥터 스트레인지 ScreenX 포스터 증정극장 변경 안내</a></li>
              <li><a href="#"> [기타] 개인정보처리방침 개정 안내 </a></li>
              <li><a href="#"> [시스템 점검] 2022년 4월 시스템 점검 안내</a></li>
              <li><a href="#"> [행사/이벤트] 극장안내 </a></li>
            </ul>
          </div>
          <div className='b_faq'>
            <p className='b_Qna'>고객센터</p> 
            <p>1544-0303</p>
            <p>고객센터 운영시간 (평일 : 09:00 ~ 18:00)</p> 
            <span>1:1문의</span><span>대관 문의</span><span>분실물 문의</span>
            </div>
        </div>
        <div className='b_adBox'> 
        <Link to="/preview" className='b_btnmore'>더보기<i className="fa-solid fa-arrow-right-long"></i></Link>
        <ul className='b_ad'>
        <Swiper navigation={true} modules={[Navigation]} loop={true} slidesPerView={3} className="mySwiper">
        <SwiperSlide>{img2[0]}</SwiperSlide>
        <SwiperSlide>{img2[1]}</SwiperSlide>
        <SwiperSlide>{img2[2]}</SwiperSlide>
        <SwiperSlide>{img2[3]}</SwiperSlide>
        <SwiperSlide>{img2[4]}</SwiperSlide>
        <SwiperSlide>{img2[5]}</SwiperSlide>
        <SwiperSlide>{img2[6]}</SwiperSlide>
        <SwiperSlide>{img2[7]}</SwiperSlide>
        <SwiperSlide>{img2[8]}</SwiperSlide>
        </Swiper>
         </ul>
        </div>
     </div> 
     
    </>
  );
}