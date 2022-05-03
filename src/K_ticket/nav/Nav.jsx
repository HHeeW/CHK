import React, { useState } from 'react';
import './nav.css';
import age12 from '../images/12.png';
import age15 from '../images/15.png';
import age19 from '../images/19.png';
import age0 from '../images/all.png';
import anime from 'animejs';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";



export default function Nav() {

    const arr = [
        {id: 1, age: '12', score: 97, img: age12, poster: '/K_images/닥터스트레인지.jpg', title: '닥터스트레인지-대혼돈의멀티버스'},
        {id: 2, age: '전체', score: 97, img: age0, poster: '/K_images/겨울왕국1.jpg', title: '겨울왕국'},
        {id: 3, age: '12', score: 93, img: age12, poster: '/K_images/공기살인.jpg', title: '공기살인'},
        {id: 4, age: '15', score: 95, img: age15, poster: '/K_images/귀칼.jpg', title: '극장판 귀멸의 칼날-무한열차편'},
        {id: 5, age: '청불', score: 97, img: age19, poster: '/K_images/내부자들.jpg', title: '내부자들'},
        {id: 6, age: '15', score: 82, img: age15, poster: '/K_images/모비우스.jpg', title: '모비우스'},
        {id: 7, age: '전체', score: 93, img: age0, poster: '/K_images/수퍼 소닉2.jpg', title: '수퍼소닉2'},
        {id: 8, age: '12', score: 93, img: age12, poster: '/K_images/신과함께.jpg', title: '신과함께 죄와벌'},
        {id: 9, age: '12', score: 82, img: age12, poster: '/K_images/신비한 동물들과 덤블도어의 비밀.jpg', title: '신비한 동물사전'},
        {id: 10, age: '12', score: 0, img: age12, poster: '/K_images/심슨 가족 더 무비.jpg', title: '심슨가족더무비'},
        {id: 11, age: '청불', score: 64, img: age19, poster: '/K_images/아수라.jpg', title: '아수라'},
        {id: 12, age: '15', score: 87, img: age15, poster: '/K_images/앵커.jpg', title: '앵커'},
        {id: 13, age: '15', score: 94, img: age15, poster: '/K_images/주술회전.jpg', title: '극장판 주술회전'},
        {id: 14, age: '전체', score: 97, img: age0, poster: '/K_images/짱구는 못말려 낙서왕국.jpg', title: '짱구는 못말려 : 낙서왕국'},
        {id: 15, age: '청불', score: 79, img: age19, poster: '/K_images/타짜.jpg', title: '타짜'},
        {id: 16, age: '전체', score: 98, img: age0, poster: '/K_images/토이스토리.jpg', title: '토이스토리'},
        {id: 17, age: '전체', score: 97, img: age0, poster: '/K_images/해리포터 불사조 기사단.jpg', title: '해리포터와 불사조 기시단'},
        {id: 18, age: '전체', score: 98, img: age0, poster: '/K_images/해리포터 죽음의 성물.jpg', title: '해리포터와 죽음의 성물2'},
        {id: 19, age: '청불', score: 98, img: age19, poster: '/K_images/신세계.jpg', title: '신세계'},
        {id: 20, age: '15', score: 85, img: age15, poster: '/K_images/뺑반.jpg', title: '뺑반'}
    ];
    const arrsort = [...arr];

    const arrsort1 = arrsort.sort((a, b) => a.score - b.score);

    const arr2 = [
        {id: 1, title: '강서구'},
        {id: 2, title: '송파구'},
        {id: 3, title: '강남구'},
        {id: 4, title: '동작구'}
    ];
    const arr3 = [
        {id: 1, title: '풍무'},
        {id: 2, title: '사우'},
        {id: 3, title: '걸포'}
    ];

const List = (props) =>{
    const arr2 = [];
    for(let i of props.arr){
    arr2.push(<div className='k-bar' id={i.id} onClick={changeColor} key={i.id} style={{backgroundColor: color[i.id-1]}}>
        <div className='k-age'><img src={i.img}></img></div>
        <div className='k-title'>{i.title}</div>
    </div>);
    }
return(
    <>{arr2}</>
)
}


const List2 = (props) => {
    const arr2 = [];
    for(let i of props.arr){
        arr2.push( <div className='k-bar2' key={i.id}>
        <div className='k-bar2-left'>
            <div><img src={i.poster}></img></div>
        </div>
        <div className='k-bar2-right'>
            <div className='k-age2'><img src={i.img}></img></div>
            <div className='k-title2'>{i.title}</div>
        </div>
    </div>)
    }
    return (
        <>{arr2}</>
    )
}
const List3 = (props) => {
    const arr = [];
    for(let i of props.arr2){
        arr.push(<div key={i.id} id={i.id} onClick={subcity} style={{backgroundColor: color3[i.id-1]}}>{i.title}</div>)
    }
    return (
        <>{arr}</>
    )
}

const List4 = (props) => {
    const arr = [];
    for(let i of props.arr3){
        arr.push(<div key={i.id} id={i.id} onClick={subcity} style={{backgroundColor: color3[i.id-1]}}>{i.title}</div>)
    }
    return (
        <>{arr}</>
    )
}

const List5 = (props) => {
    const arr = [];
    console.log(props.arr);
    
    for(let i of props.arr){
       if(parseInt(tae) === i.id){ 
        arr.push(<div className='kkkk' key={i.id}><img src={i.poster}></img></div>);
       }
    }
    
    return(
        <>{arr}</>
    )
}

let [mode, setMode] = useState('bar');
let [location, setLocation] = useState('seoul');

let [color, setColor] = useState([]);
let [color2, setColor2] = useState(['greenyellow']);
let [color3, setColor3] = useState(['greenyellow']);
let [tae, setTae] = useState(null);


const bar = () => {
    setMode('bar');
}

const grid = () => {
    mode === 'sort' ? setMode('grid') : setMode('grid2');
}
const city = (e) => {
    console.log('city입니다.');
    console.log(e.target.id);
    color2 = [];
    let newColor = [...color2];
    newColor[e.target.id-1] = 'greenyellow';
    setColor2(newColor);
    e.target.id === '1' ? setLocation('seoul') : setLocation('gimpo');
}
const subcity = (e) => {
    console.log('subcity입니다.');
    color3 = [];
    let newColor = [...color3];
    console.log(e.target.id);
    newColor[e.target.id-1] = 'greenyellow';
    setColor3(newColor);

}

const changeColor = (e) => {
    console.log('클릭되었습니다.');

    anime({
        targets: '.k-kkkk',
        // translateX: {
        //   value: 250,
        //   duration: 800
        // },
        rotate: {
          value: 360,
          duration: 1200,
          easing: 'easeInOutSine'
        },
        // scale: {
        //   value: 2,
        //   duration: 1600,
        //   delay: 800,
        //   easing: 'easeInOutQuart'
        // },
         // All properties except 'scale' inherit 250ms delay
      });
    
    console.log(e.currentTarget.id);
    setTae(e.currentTarget.id);
    console.log(`content3 : ${content3}`);
    
    console.log(content3);
    let newColor = [];
    color = [];
    // console.log(e.target.id);
    setColor(newColor);
   
    console.log(e.currentTarget.id);
   
    newColor = [...color];

    newColor[e.currentTarget.id-1] = 'greenyellow';
    setColor(newColor);
}
const sort = (e) => {
    e.target.value === '2' ? setMode('sort2') : setMode('sort');
    console.log(`e.target.value : ${e.target.value}`);
}




let content = null;
let content2 = null;
let content3 = null;

if(mode === 'bar'){
    content = <List arr={arr}></List>
}else if(mode === 'grid') {content = <List2 arr={arr}></List2>
}else if(mode === 'grid2') {content = <List2 arr={arrsort1}></List2>
}else if(mode === 'sort') {content = <List arr={arr}></List>
}else if(mode === 'sort2') {content = <List arr={arrsort1}></List>
}


if(location === 'seoul'){
    content2 = <List3 arr2={arr2}></List3>
}else if(location === 'gimpo') content2 = <List4 arr3={arr3}></List4>

if(tae !== 0){
    content3 = <List5 arr={arr}></List5>
}



  return (
    <div className='k-container-nav'>
        <div className='k-box1'>
            <div className='k-box1-top'>영화</div>
            <div className='k-box1-middle'>
                <select className="k-scrollbox" onChange={sort}>
                    <option value="1">예매순</option>
                    <option value="2">평점순</option>
                </select>
                <div className='k-iconbox'>
                   
                <div><i className="fa-solid fa-bars" onClick={bar}></i></div>
                <div><i className="fa-solid fa-border-all" onClick={grid}></i></div>
            
                </div>
            </div>
            <div className='k-box1-bottom'>
                {content}

            </div>
        </div>
        <div className='k-box2'>
            <div className='k-box2-top'>영화관</div>
            <div className='k-box2-middle'>
                <div className='k-box2-middle-leftbox'>전체</div>
                <div className='k-box2-middle-rightbox'>Special</div>
            </div>
            <div className='k-box2-bottom'>
                <div className='k-box2-bottom-leftbox'>
                    <div id='1' onClick={city} style={{backgroundColor: color2[0]}}>서울</div>
                    <div id='2' onClick={city} style={{backgroundColor: color2[1]}}>김포</div>
                </div>
                <div className='k-box2-bottom-rightbox'>
                    {content2}
                </div>
                
            </div>
    
        </div>

        <div className='k-box3'>
            <div className='k-box3-top'>
                <div className='k-kkkk'>{content3}</div>
            </div>

            <div className='k-box3-right'>
                <Swiper slidesPerView={7} spaceBetween={60} freeMode={true} pagination={{ clickable: true, }}
                    modules={[FreeMode, Pagination]} className="mySwiper k-swiper">
                    <SwiperSlide className='k-swiper-slide'>1 &nbsp; 월</SwiperSlide>
                    <SwiperSlide className='k-swiper-slide'>2 &nbsp; 화</SwiperSlide>
                    <SwiperSlide className='k-swiper-slide'>3 &nbsp; 수</SwiperSlide>
                    <SwiperSlide className='k-swiper-slide'>4 &nbsp; 목</SwiperSlide>
                    <SwiperSlide className='k-swiper-slide'>5 &nbsp; 금</SwiperSlide>
                    <SwiperSlide className='k-swiper-slide'>6 &nbsp; 토</SwiperSlide>
                    <SwiperSlide className='k-swiper-slide'>7 &nbsp; 일</SwiperSlide>
                    <SwiperSlide className='k-swiper-slide'>8 &nbsp; 월</SwiperSlide>
                    <SwiperSlide className='k-swiper-slide'>9 &nbsp; 화</SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  )
}
