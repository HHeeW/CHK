import React, { useState } from 'react';
import './slide2.css';

const Slide2 = (props) => { // props 안에 객체로 다들어있음
    const List = () => {
        const arr2 = [];
        let count = 0;
        let count2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        let count3 = 0;
        for(let i=0; i<40; i++){
            count++;
            if(count === 9){ count = 1; count3++; }
            arr2.push(<div id={count} row={count2[count3]}><i className="fa-solid fa-couch k-sofa"></i></div>)
        }
        return arr2;
    }
    const List2 = () => {
        const arr2 = [];
        for(let i=0; i<16; i++){
            arr2.push(<div><i className="fa-solid fa-couch k-sofa"></i></div>)
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
            <div className='k-slide2-main-left-poster'><img src={i.poster} width='175' height='200'></img></div>
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
    const up = (e) => {
        console.log('up');
        switch(true){
            case e.target.id === '1': setCount1(count1 + 1); break;
            case e.target.id === '2': setCount2(count2 + 1); break;
            case e.target.id === '3': setCount3(count3 + 1); break;
        }
        
    }
    const down = (e) => {

        console.log('down');
        switch(true){
            case e.target.id === '1': if(count1 === 0){ break; } setCount1(count1 - 1); break;
            case e.target.id === '2': if(count2 === 0){ break; } setCount2(count2 - 1); break;
            case e.target.id === '3': if(count3 === 0){ break; } setCount3(count3 - 1); break;
        }

    }
    let [count1, setCount1] = useState(1);
    let [count2, setCount2] = useState(0);
    let [count3, setCount3] = useState(0);
    
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
                                <div><i id='1' onClick={up} className="fa-solid fa-angle-up"></i>&nbsp;&nbsp;{count1}&nbsp;&nbsp;<i id='1' onClick={down} class="fa-solid fa-chevron-down"></i></div>
                                <div><i id='2' onClick={up} className="fa-solid fa-angle-up"></i>&nbsp;&nbsp;{count2}&nbsp;&nbsp;<i id='2' onClick={down} class="fa-solid fa-chevron-down"></i></div>
                                <div><i id='3' onClick={up} className="fa-solid fa-angle-up"></i>&nbsp;&nbsp;{count3}&nbsp;&nbsp;<i id='3' onClick={down} class="fa-solid fa-chevron-down"></i></div>

                            </div>
                        </div>
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