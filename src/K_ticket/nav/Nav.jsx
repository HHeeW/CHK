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
        {id: 2, age: '전체', score: 98, img: age0, poster: '/K_images/해리포터 죽음의 성물.jpg', title: '해리포터와 죽음의 성물2'},
        {id: 3, age: '12', score: 82, img: age12, poster: '/K_images/신비한 동물들과 덤블도어의 비밀.jpg', title: '신비한 동물사전'},
        {id: 4, age: '전체', score: 97, img: age0, poster: '/K_images/해리포터 불사조 기사단.jpg', title: '해리포터와 불사조 기시단'},
        {id: 5, age: '청불', score: 98, img: age19, poster: '/K_images/신세계.jpg', title: '신세계'},
        {id: 6, age: '12', score: 93, img: age12, poster: '/K_images/신과함께.jpg', title: '신과함께 죄와벌'},
        {id: 7, age: '청불', score: 79, img: age19, poster: '/K_images/타짜.jpg', title: '타짜'},
        {id: 8, age: '전체', score: 97, img: age0, poster: '/K_images/겨울왕국1.jpg', title: '겨울왕국'},
        {id: 9, age: '청불', score: 97, img: age19, poster: '/K_images/내부자들.jpg', title: '내부자들'},
        {id: 10, age: '전체', score: 98, img: age0, poster: '/K_images/토이스토리.jpg', title: '토이스토리'},
        {id: 11, age: '12', score: 0, img: age12, poster: '/K_images/심슨 가족 더 무비.jpg', title: '심슨가족더무비'},
        {id: 12, age: '청불', score: 64, img: age19, poster: '/K_images/아수라.jpg', title: '아수라'},
        {id: 13, age: '15', score: 85, img: age15, poster: '/K_images/뺑반.jpg', title: '뺑반'},
        {id: 14, age: '전체', score: 97, img: age0, poster: '/K_images/짱구는 못말려 낙서왕국.jpg', title: '짱구는 못말려 : 낙서왕국'},
        {id: 15, age: '15', score: 94, img: age15, poster: '/K_images/주술회전.jpg', title: '극장판 주술회전'},
        {id: 16, age: '12', score: 93, img: age12, poster: '/K_images/공기살인.jpg', title: '공기살인'},
        {id: 17, age: '15', score: 87, img: age15, poster: '/K_images/앵커.jpg', title: '앵커'},
        {id: 18, age: '15', score: 95, img: age15, poster: '/K_images/귀칼.jpg', title: '극장판 귀멸의 칼날-무한열차편'},
        {id: 19, age: '전체', score: 93, img: age0, poster: '/K_images/수퍼 소닉2.jpg', title: '수퍼소닉2'},
        {id: 20, age: '15', score: 82, img: age15, poster: '/K_images/모비우스.jpg', title: '모비우스'}

    ];
    const arrsort = [...arr];

    const arrsort1 = arrsort.sort((a, b) => a.score - b.score);

    const arr2 = [
        {id: 1, title: '강서구'},
        {id: 2, title: '송파구'},
        {id: 3, title: '강남구'},
        {id: 4, title: '동작구'}
    ];
    const arr3 = [ // 객체가 3개라 slide 일반 청소년 우대랑 같이 씀
        {id: 1, title: '풍무', name: '일반'},
        {id: 2, title: '사우', name: '청소년'},
        {id: 3, title: '걸포', name: '우대'}
    ];

    const arr4 = [
        {id: 1, clock1: '10:45', clock2: '12:45', clock3: '03:25', clock4: '05:50', dimension: '2D'},
        {id: 2, clock1: '08:45', clock2: '09:10', clock3: '01:24', clock4: '03:40', dimension: '3D'},
        {id: 3, clock1: '07:05', clock2: '09:35', clock3: '12:30', clock4: '01:50', dimension: '3Ds MAX'},
    ]


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
        arr.push(<div key={i.id} className='k-bar3' id={i.id} onClick={subcity} style={{backgroundColor: color3[i.id-1]}}>{i.title}</div>)
    }
    return (
        <>{arr}</>
    )
}

const List4 = (props) => {
    const arr = [];
    for(let i of props.arr3){
        arr.push(<div key={i.id} className='k-bar4' id={i.id} onClick={subcity} style={{backgroundColor: color3[i.id-1]}}>{i.title}</div>)
    }
    return (
        <>{arr}</>
    )
}

const List5 = (props) => {
    const arr = [];
    for(let i of props.arr){
       if(parseInt(tae) === i.id){ 
        arr.push( <div key={i.id} className='k-box3-top'>
        <div className='k-box3-top-left'><img src={i.poster}></img></div>
        <div className='k-box3-top-right'>
        <div className='k-bar5'>
            <div className='k-age5'><img src={i.img}></img></div>
            <div className='k-title5'>{i.title}</div>
        </div>
        <div>{i.age} / 평점</div>
        <div>개봉일</div>
        </div>

    </div>);
       }
    }
    
    return(
        <>{arr}</>
    )
}
const List6 = (props) => {
    const arr = [];
    for(let i of props.arr)
        arr.push(<>
         <div className='k-box3-bottom-top'>{i.dimension}</div>

            <div className='k-box3-bottom-bottom'>
                <div className='k-box3-datebox' onClick={slidepage}>
                    <div>{i.clock1}</div>
                    <div>빈좌석/전체</div>
                </div>
                <div className='k-box3-datebox' onClick={slidepage}>
                    <div>{i.clock2}</div>
                    <div>빈좌석/전체</div>
                </div>
                <div className='k-box3-datebox' onClick={slidepage}>
                    <div>{i.clock3}</div>
                    <div>빈좌석/전체</div>
                </div>
                <div className='k-box3-datebox' onClick={slidepage}>
                    <div>{i.clock4}</div>
                    <div>빈좌석/전체</div>
                </div>
            </div>
    </>)
    return (
        <>{arr}</>
    )
}
const List7 = (props) => {
    const arr = [];
    for(let i of props.arr){
    arr.push(
        <>
        <div className='k-slidebox-updownbox'>
             <div>{i.name}</div>
                            <div><i className="fa-solid fa-circle-up k-upbutton" id={i.id} onClick={up}></i></div>
                            <div>{updown[i.id-1]}</div>
                            <div><i className="fa-solid fa-circle-down k-downbutton" id={i.id} onClick={down}></i></div>
                        </div>
                        </>)
    }
return(
    <>{arr}</>
)
}

let [mode, setMode] = useState('bar');
let [location, setLocation] = useState('seoul');
let [color, setColor] = useState([]);
let [color2, setColor2] = useState(['rgb(109, 130, 110)']);
let [color3, setColor3] = useState(['rgb(109, 130, 110)']);
let [tae, setTae] = useState(null);
let [hoon, setHoon] = useState(1); // 좌석 화면 content4
let [slidedisplay, setSlidedisplay] = useState('false'); // 시간누르면 슬라이드 화면 display
let [checkdisplay, setCheckdisplay] = useState('none'); // 영화 선택 아이콘
let [check2display, setCheck2display] = useState('none'); // 날짜 선택 아이콘
let [datedisplay, setDatedisplay] = useState([]); // 날짜 선택시 해당 날짜만 background 줘야해서 배열
let [updown, setUpdown] = useState([1, 0, 0]); // slidebox 일반 청소년 우대 updown



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
    newColor[e.target.id-1] = 'rgb(109, 130, 110)';
    setColor2(newColor);
    e.target.id === '1' ? setLocation('seoul') : setLocation('gimpo');
}
const subcity = (e) => {
    console.log('subcity입니다.');
    color3 = [];
    let newColor = [...color3];
    console.log(e.target.id);
    newColor[e.target.id-1] = 'rgb(109, 130, 110)';
    setColor3(newColor);

}

const changeColor = (e) => {
    console.log('클릭되었습니다.');

    setCheckdisplay('block');
    setHoon(hoon + 1);

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
   
    console.log(e.currentTarget.id);

    newColor[e.currentTarget.id-1] = 'rgb(109, 130, 110)';
    setColor(newColor);
}

const sort = (e) => {
    e.target.value === '2' ? setMode('sort2') : setMode('sort');
    console.log(`e.target.value : ${e.target.value}`);
}
const slidepage = () => {
    setSlidedisplay(!slidedisplay);
}
const datecheck = (e) => { // 날짜 누르면
    setCheck2display('block'); // 날짜 아이콘 block
    setHoon(hoon + 1);
    let newDate = [];
    newDate[e.currentTarget.id] = 'rgb(109, 130, 110)';
    setDatedisplay(newDate);
}
const up = (e) => { // slide 일반 청소년 up
    let count =  [...updown];
    switch(true){
        case e.target.id === '1' : console.log('1입니다.'); count[0] = parseInt(updown[0]+1);  setUpdown(count); break;
        case e.target.id === '2' : console.log('2입니다.'); count[1] = parseInt(updown[1]+1);  setUpdown(count); break;
        case e.target.id === '3' : console.log('3입니다.'); count[2] = parseInt(updown[2]+1);  setUpdown(count); break;
    } 
}
const down = (e) => { // slide 일반 청소년 down
    let count =  [...updown];
    switch(true){
        case e.target.id === '1' : console.log('1입니다.'); count[0] = parseInt(updown[0]-1);  setUpdown(count); break;
        case e.target.id === '2' : console.log('2입니다.'); count[1] = parseInt(updown[1]-1);  setUpdown(count); break;
        case e.target.id === '3' : console.log('3입니다.'); count[2] = parseInt(updown[2]-1);  setUpdown(count); break;
    }
}

let content = null;
let content2 = null;
let content3 = null;
let content4 = null;
let content5 = null;

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
if(checkdisplay === 'block' && check2display === 'block'){
content4 = <List6 arr={arr4}></List6>
}
content5 = <List7 arr={arr3}></List7>




  return (
    <div className='k-container-nav'>
        {/* 슬라이드  좌석선택*/}

        <div className='k-slidebox' style={{display: slidedisplay ? 'none' : 'block'}}>
            <div className='k-slidebox-container'>
                <div className='k-slidebox-top'>인원/좌석 선택</div>
                <div className='k-slidebox-middle'>
                <div className='k-slidebox-middle-left'>
                    {content5}
                    <div className='k-slidebox-middle-left-buttonbox'>
                        <button>예매 다시하기</button>
                        <button>관람 할인 안내</button>
                        <button>인원수 초기화</button>
                    </div>
                </div>
                
                    <div className='k-slidebox-middle-right'>
                        {content3}
                    </div>
                </div>
                <div className='k-slidebox-bottom'>
                    <div className='k-slidebox-bottom-screen'>
                        <div>SCREEN</div>
                    </div>
                    <div className='k-slidebox-bottom-chairbox1'>
                        <div className='k-slidebox-bottom-chairbox1-left'>
                            <div>A</div>
                        </div>
                        <div className='k-slidebox-bottom-chairbox1-right'>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <div>5</div>
                            <div>6</div>
                            <div>7</div>
                            <div>8</div>
                        </div>
                    </div>
                    <div>결제정보</div>
                </div>
            </div>
        </div>
 
        {/* 슬라이드  좌석선택 끝*/}

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
            <div className='k-box2-top'>지역</div>
            <div className='k-box2-middle'>
                <div className='k-box2-middle-leftbox'>전체</div>
                <div className='k-box2-middle-rightbox'>Special</div>
            </div>
            <div className='k-box2-bottom'>
                <div className='k-box2-bottom-leftbox'>
                    <div id='1' className='k-bar4' onClick={city} style={{backgroundColor: color2[0]}}>서울</div>
                    <div id='2' className='k-bar4' onClick={city} style={{backgroundColor: color2[1]}}>김포</div>
                </div>
                <div className='k-box2-bottom-rightbox'>
                    {content2}
                </div>
            </div>
    
        </div>

        <div className='k-box3'>
            <div className='k-box3-checkbox'>
                <div>영화 선택 &nbsp;&nbsp;<i className="fa-solid fa-circle-check k-fadein" style={{ display : checkdisplay }}></i></div>
                <div>지역 선택 &nbsp;&nbsp;<i className="fa-solid fa-circle-check"></i></div>
                <div>날짜 선택 &nbsp;&nbsp;<i className="fa-solid fa-circle-check k-fadein" style={{ display : check2display }}></i></div>
            </div>
            <div className='k-kkkk'>{content3}</div>


            <div className='k-box3-middle'>
                {/* 외부에서 가져온 슬라이드라서 useState가 되지않는다. 그래서 노가다로 반복 */}
                <Swiper slidesPerView={7} spaceBetween={60} freeMode={true} pagination={{ clickable: true, }} modules={[Pagination]} className="k-mySwiper">
                    <SwiperSlide><div className='k-ii' id='1' onClick={datecheck} style={{ backgroundColor : datedisplay[1] }}>1</div><br />
                    <div className='k-ii' id='1' onClick={datecheck}>일</div></SwiperSlide>
                    <SwiperSlide><div className='k-ii' id='2' onClick={datecheck} style={{ backgroundColor : datedisplay[2] }}>2</div><br />
                    <div className='k-ii' id='2' onClick={datecheck}>월</div></SwiperSlide>
                    <SwiperSlide><div className='k-ii' id='3' onClick={datecheck} style={{ backgroundColor : datedisplay[3] }}>3</div><br />
                    <div className='k-ii' id='3' onClick={datecheck}>화</div></SwiperSlide>
                    <SwiperSlide><div className='k-ii' id='4' onClick={datecheck} style={{ backgroundColor : datedisplay[4] }}>4</div><br />
                    <div className='k-ii' id='4' onClick={datecheck}>수</div></SwiperSlide>
                    <SwiperSlide><div className='k-ii' id='5' onClick={datecheck} style={{ backgroundColor : datedisplay[5] }}>5</div><br />
                    <div className='k-ii' id='5' onClick={datecheck}>목</div></SwiperSlide>
                    <SwiperSlide><div className='k-ii' id='6' onClick={datecheck} style={{ backgroundColor : datedisplay[6] }}>6</div><br />
                    <div className='k-ii' id='6' onClick={datecheck}>금</div></SwiperSlide>
                    <SwiperSlide><div className='k-ii' id='7' onClick={datecheck} style={{ backgroundColor : datedisplay[7] }}>7</div><br />
                    <div className='k-ii' id='7' onClick={datecheck}>토</div></SwiperSlide>
                    <SwiperSlide><div className='k-ii' id='8' onClick={datecheck} style={{ backgroundColor : datedisplay[8] }}>8</div><br />
                    <div className='k-ii' id='8' onClick={datecheck}>일</div></SwiperSlide>
                    <SwiperSlide><div className='k-ii' id='9' onClick={datecheck} style={{ backgroundColor : datedisplay[9] }}>9</div><br />
                    <div className='k-ii' id='9' onClick={datecheck}>월</div></SwiperSlide>
                </Swiper>
            </div>
            <div className='k-box3-bottom'>
               {content4}
            </div>
        </div>
    </div>
  )
}
