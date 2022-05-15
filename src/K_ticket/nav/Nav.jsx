import React, { useState, useEffect, useContext }from 'react'
import './nav.css';
import Slide1 from './Slide1';
import { ThemeContext } from '../context/ThemeContext';
import { useLocation } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Nav = () => {
    const data = useContext(ThemeContext);
    const slide1_display_key = useLocation().state; // 타지역에서 예매하기 눌렀을 때 변수에 저장 근데 객체로하면 왜 안될까??

    
    const arr = [
        {id: 1, age: '12', score: 97, img: '/K_images/12.png', poster: '/K_images/닥터스트레인지.jpg', title: '닥터스트레인지-대혼돈의멀티버스', opening: '2022,05,04', director: '샘 레이미'},
        {id: 2, age: '전체', score: 98, img: '/K_images/all.png', poster: '/K_images/해리포터 죽음의 성물.jpg', title: '해리포터와 죽음의 성물2' , opening: '2011.07.13', director: '데이빗 예이츠'},
        {id: 3, age: '12', score: 82, img: '/K_images/12.png', poster: '/K_images/신비한 동물들과 덤블도어의 비밀.jpg', title: '신비한 동물사전과 덤블도어의 비밀', opening: '2022.04.13', director: '데이빗 예이츠'},
        {id: 4, age: '전체', score: 97, img: '/K_images/all.png', poster: '/K_images/해리포터 불사조 기사단.jpg', title: '해리포터와 불사조 기시단', opening: '2022.02.09', director: '데이빗 예이츠'},
        {id: 5, age: '청불', score: 98, img: '/K_images/19.png', poster: '/K_images/신세계.jpg', title: '신세계', opening: '2013.02.21', director: '박훈정'},
        {id: 6, age: '12', score: 93, img: '/K_images/12.png', poster: '/K_images/신과함께.jpg', title: '신과함께 죄와벌', opening: '2017.12.20', director: '김용화'},
        {id: 7, age: '청불', score: 79, img: '/K_images/19.png', poster: '/K_images/타짜.jpg', title: '타짜' , opening: '2006.09.27', director: '최동훈'},
        {id: 8, age: '전체', score: 97, img: '/K_images/all.png', poster: '/K_images/겨울왕국1.jpg', title: '겨울왕국', opening: '2014.01.16', director: '크리스 벅, 제니퍼 리'},
        {id: 9, age: '청불', score: 97, img: '/K_images/19.png', poster: '/K_images/내부자들.jpg', title: '내부자들', opening: '2015.11.18', director: '우민호'},
        {id: 10, age: '전체', score: 98, img: '/K_images/all.png', poster: '/K_images/토이스토리.jpg', title: '토이스토리4', opening: '2019.06.20', director: '조시 쿨리'},
        {id: 11, age: '12', score: 0, img: '/K_images/12.png', poster: '/K_images/심슨 가족 더 무비.jpg', title: '심슨가족더무비', opening: '2007.08.22', director: '데이빗 실버맨'},
        {id: 12, age: '청불', score: 64, img: '/K_images/19.png', poster: '/K_images/아수라.jpg', title: '아수라', opening: '2016.09.28', director: '김성수'},
        {id: 13, age: '15', score: 85, img: '/K_images/15.png', poster: '/K_images/뺑반.jpg', title: '뺑반', opening: '2019.01.30', director: '한준희'},
        {id: 14, age: '전체', score: 97, img: '/K_images/all.png', poster: '/K_images/짱구는 못말려 낙서왕국.jpg', title: '짱구는 못말려 : 낙서왕국', opening: '2021.09.15', director: '쿄코쿠 타카히코'},
        {id: 15, age: '15', score: 94, img: '/K_images/15.png', poster: '/K_images/주술회전.jpg', title: '극장판 주술회전', opening: '2022.02.17', director: '박성후'},
        {id: 16, age: '12', score: 93, img: '/K_images/12.png', poster: '/K_images/공기살인.jpg', title: '공기살인', opening: '2022.04.22', director: '조용선'},
        {id: 17, age: '15', score: 87, img: '/K_images/15.png', poster: '/K_images/앵커.jpg', title: '앵커', opening: '2022.04.20', director: '정지연'},
        {id: 18, age: '15', score: 95, img: '/K_images/15.png', poster: '/K_images/귀칼.jpg', title: '극장판 귀멸의 칼날-무한열차편', opening: '2022.04.21', director: '소토자키 하루오'},
        {id: 19, age: '전체', score: 93, img: '/K_images/all.png', poster: '/K_images/수퍼 소닉2.jpg', title: '수퍼소닉2', opening: '2022.04.06', director: '제프 파울러'},
        {id: 20, age: '15', score: 82, img: '/K_images/15.png', poster: '/K_images/모비우스.jpg', title: '모비우스', opening: '2022.03.30', director: '다니엘 에스피노사'}
    ];
    const [slidedisplay, setSlidedisplay] = useState('false');
    let [aa, setAa] = useState(); // movie 선택 시 movie_select 활성화

    const imgclick = (e) => {
        setAa(e.target.id);
        setSlidedisplay(!slidedisplay);
    }

    useEffect(()=>{ // 타지역에서 에매하기 눌렀을 때 실행
        if(slide1_display_key !== null){
            setSlidedisplay(!slidedisplay);
            setAa(slide1_display_key);
        }
    },[slide1_display_key]);

  return (
    <div className='k-nav-container'>
        <div className='k-nav-header'>영화를 선택해주세요!</div>
        <Slide1 slidedisplay={slidedisplay} setSlidedisplay={setSlidedisplay} arr={arr} movie_number={aa}></Slide1>
        <div className='k-nav-slide'>
            <Swiper
                effect={"coverflow"} grabCursor={false} centeredSlides={false} slidesPerView={4}
                coverflowEffect={{ rotate: 20, stretch: 0, depth: 100, modifier: 1, slideShadows: false, }}
                pagination={true} modules={[EffectCoverflow, Pagination]} className="k-mySwiper">
                <SwiperSlide><img id='1' src='/K_images/닥터스트레인지.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='2' src='/K_images/해리포터 죽음의 성물.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='3' src='/K_images/신비한 동물들과 덤블도어의 비밀.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='4' src='/K_images/해리포터 불사조 기사단.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='5' src='/K_images/신세계.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='6' src='/K_images/신과함께.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='7' src='/K_images/타짜.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='8' src='/K_images/겨울왕국1.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='9' src='/K_images/내부자들.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='10' src='/K_images/토이스토리.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='11' src='/K_images/심슨 가족 더 무비.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='12' src='/K_images/아수라.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='13' src='/K_images/뺑반.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='14' src='/K_images/짱구는 못말려 낙서왕국.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='15' src='/K_images/주술회전.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='16' src='/K_images/공기살인.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='17' src='/K_images/앵커.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='18'src='/K_images/귀칼.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='19' src='/K_images/수퍼 소닉2.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
                <SwiperSlide><img id='20' src='/K_images/모비우스.jpg' height='400' onClick={imgclick}></img></SwiperSlide>
            </Swiper>
        </div>
    </div>  
  )
}

export default Nav