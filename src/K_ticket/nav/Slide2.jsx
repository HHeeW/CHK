import React, { useState, useEffect, useRef } from 'react';
import './slide2.css';

const Slide2 = (props) => { // props 안에 객체로 다들어있음
    const chair_row = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    const List = () => {
        const arr2 = [];
        for(let i=0; i<40;i++){
            arr2.push(<div id={i+1} onClick={()=>chair(i+1, chair_row[Math.floor(i/8)], (i+1)%8)}><i className="fa-solid fa-couch k-sofa k-cursor" style={{color: chair_color[i]}}></i></div>)
        }
        return arr2;
    }
    const List2 = () => {
        const arr2 = [];
        for(let i=41; i<65; i++){
            arr2.push(<div id={i} onClick={()=>chair(i, chair_row[Math.floor(i/8)], i%8)} ><i className="fa-solid fa-couch k-sofa k-cursor" style={{color: chair_color[i-1]}}></i></div>)
        }
        return arr2;
    }
    const slide2_display_back = () => { // slide2 display
        props.setSlide2display(!props.slide2display);
    }
    const List3 = () => {
        const a = props.clock_props;
        const arr2 = [];
        for(let i of props.arr){
            if(i.id === parseInt(props.movie)){
            arr2.push(<div className='k-slide2-main-left-top'>
            <div className='k-slide2-main-left-poster'><img src={i.poster} width='177' height='198'></img></div>
            <div className='k-slide2-main-left-info'>
                <div className='k-slide2-main-left-info-title'>
                    <div><img src={i.img}></img></div>
                    <div>{i.title}</div>
                </div>
                <div>날짜 : 2022-05-{props.clock}</div>
                <div>시간 : {props.clock_arr[a-1].clock}{props.clock_arr[a-1].clock2}({props.week})</div>
                <div>지역 : 김포시</div>
            </div>
        </div>)
        }
    }
    return arr2;
    }
   
    const chair = (t, r, a) => {
       
        if(chair_count !== 0){
            let arr2 = [...chair_number];
            arr2[t-1] = r+a+' ';
            setChair_number(arr2);

            let arr = [...chair_color];
            arr[t-1] = 'red';
            setChair_color(arr);
            setChair_count(chair_count - 1);
        }
    }

    
    const chair_reset = () => { // 의자 초기화
        let arr = [];
        setChair_color(arr);
        setChair_count(0);
        setCount1(0);
        setCount2(0);
        setCount3(0);
        setCalulator(0);
        setChair_number(arr);
    }
    const up = (e) => {
        setChair_count(chair_count + 1);
       
        switch(true){
            case e.target.id === '1': setCalulator(parseInt(calculator) + 11000); setCount1(count1 + 1); break;
            case e.target.id === '2': setCalulator(parseInt(calculator) + 8000); setCount2(count2 + 1); break;
            case e.target.id === '3': setCalulator(parseInt(calculator) + 13000); setCount3(count3 + 1); break;
        }
    }
    const down = (e) => {
        let arr = [...chair_color];
        let arr2 = [...chair_number];
       
        arr2[chair_number.findIndex(x => x !== '' && x !== undefined)] = '';
        setChair_number(arr2);
        arr[chair_color.findIndex(x => x === 'red')] = '';
        setChair_color(arr);
        
        switch(true){
            case e.target.id === '1': if(count1 === 0){ break; } setCalulator(calculator - 11000); setCount1(count1 - 1); break;
            case e.target.id === '2': if(count2 === 0){ break; } setCalulator(calculator - 8000); setCount2(count2 - 1); break;
            case e.target.id === '3': if(count3 === 0){ break; } setCalulator(calculator - 13000); setCount3(count3 - 1); break;
        }
    }
    
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);
    let [count3, setCount3] = useState(0);
    let [chair_color, setChair_color] = useState([]); // 의자 색상 변경
    let [chair_count, setChair_count] = useState(0); // 의자 색상 갯수
    let [calculator, setCalulator] = useState(0); // 금액
    let [calculator2, setCalulator2] = useState(0); // , 찍은 금액
    let [chair_number, setChair_number] = useState([]); // 좌석 ex) A1 B4...

    useEffect(()=>{ // 금엑에 콤마찍기
        let a = String(calculator).split('').reverse();
        a.map((x, index)=>{if((index+1)%3 === 0 && index+1 < a.length){return a.splice((index), 1, ','+x)}});
        a = a.reverse().join('');
        setCalulator2(a);
    },[chair_count])

  return (
    <div className='k-slide2-container' style={{display : props.slide2display ? 'none' : 'block'}}>
        <div className='k-slide2-box'>
            <div className='k-slide2-header'>
                <div className='k-slide2-header-left'>좌석 선택</div>
                <div className='k-slide2-header-right' onClick={slide2_display_back}><i className="fa-solid fa-circle-arrow-left"></i>  이전으로</div>
            </div>
            <div className='k-slide2-main'>
                <div className='k-slide2-main-left'>
                   <List3 />
                   <div className='k-slide2-main-left-bottom'>
                        <div className='k-slide2-main-left-button_box'>
                            <div className='k-slide2-main-left-button_box-left'>
                                <div className='k-slide2-main-left-button1'>일반</div>
                                <div className='k-slide2-main-left-button2'>청소년</div>
                                <div className='k-slide2-main-left-button3'>VIP</div>
                            </div>
                            <div className='k-slide2-main-left-button_box-right'>
                                <div><i id='1' onClick={up} className="fa-solid fa-angle-up k-cursor"></i>&nbsp;&nbsp;{count1}&nbsp;&nbsp;<i id='1' onClick={down} class="fa-solid fa-chevron-down"></i></div>
                                <div><i id='2' onClick={up} className="fa-solid fa-angle-up k-cursor"></i>&nbsp;&nbsp;{count2}&nbsp;&nbsp;<i id='2' onClick={down} class="fa-solid fa-chevron-down"></i></div>
                                <div><i id='3' onClick={up} className="fa-solid fa-angle-up k-cursor"></i>&nbsp;&nbsp;{count3}&nbsp;&nbsp;<i id='3' onClick={down} class="fa-solid fa-chevron-down"></i></div>
                            </div>
                        </div>
                        <div className='k-slide2-main-left-button_box2'>
                            <div><button className='k-cursor'>관린 할인 안내</button></div>
                            <div><button className='k-cursor' onClick={chair_reset}>인원수 초기화</button></div>
                        </div>
                        <div>좌석: {chair_number}</div>
                   </div>
                   <div className='k-slide2-main-left-result'>
                        <div className='k-slide2-main-left-result-money'>금액 : {calculator2}원</div>
                        <div className='k-slide2-main-left-result-calcurator k-cursor'>결제하기 <i class="fa-solid fa-circle-arrow-right"></i></div>
                   </div>
                </div>
                <div className='k-slide2-main-right'>
                    <div className='k-slide2-main-right-screen'>
                        <div className='k-slide2-screen1'></div>
                        <div className='k-slide2-screen2'>SCREEN</div>
                    </div>
                        <div className='k-slide2-main-right-holl'>
                            <div className='k-slide2-main-right-exit'>
                                <div className='k-slide2-exit1'><i className="fa-solid fa-arrow-right"></i></div>
                                <div className='k-slide2-exit2'></div>
                                <div className='k-slide2-exit3'><i className="fa-solid fa-arrow-right"></i></div>
                            </div>
                            <div className='k-slide2-main-right-chair_box'>
                                <div className='k-slide2-main-right-chair_box-pront'>
                                    <List />
                                </div>
                                <div className='k-slide2-main-right-chair_box-back'>
                                    <List2 />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Slide2