import React, { useState, useEffect } from 'react'
import './slide1.css';
import Slide2 from './Slide2';

const Slide1 = ({slidedisplay, setSlidedisplay, arr, movie_number}) => {

    console.log('arr: ', arr);
    const sort1 = [...arr];
    sort1.sort((a, b) => b.score - a.score);


    const calandar_arr = [  {id: 1, date: '15', week: '일'},
                            {id: 2, date: '16', week: '월'},
                            {id: 3, date: '17', week: '화'},
                            {id: 4, date: '18', week: '수'},
                            {id: 5, date: '19', week: '목'},
                            {id: 6, date: '20', week: '금'},
                            {id: 7, date: '21', week: '토'},
                            {id: 8, date: '22', week: '일'},
                            {id: 9, date: '23', week: '월'},
                            {id: 10, date: '24', week: '화'},
                            {id: 11, date: '25', week: '수'},
                            {id: 12, date: '26', week: '목'},
                            {id: 13, date: '27', week: '금'},
                            {id: 14, date: '28', week: '토'},
                            {id: 15, date: '29', week: '일'}
                        ];
    const clock_arr = [ {id: 1, clock: '09:00', clock2: '~11:00'},
                        {id: 2, clock: '11:00', clock2: '~13:00'},
                        {id: 3, clock: '13:00', clock2: '~15:00'},
                        {id: 4, clock: '15:00', clock2: '~17:00'}
                    ]
    const week_arr = ['일', '월', '화', '수', '목', '금', '토'];
                    

    const List = (props) => {
        const arr2 = [];
        let count = -1;
        for(let i of props.arr){
            count++;
            arr2.push(<div key={i.id} id={i.id} style={{border: poster[i.id-1], borderRadius : '15px'}} onClick={movie_select} className='k-bar'>
                        <div className='k-age'><img src={i.img}></img></div>
                        <div className='k-title'>{i.title}</div>
                    </div>);
        }
        return arr2;
    }
    
    const List2 = (props) => {
        const arr2 = [];
        let count = -1;
        for(let i of props.arr){
            count++;
            arr2.push(<>
            <div id={i.id} onClick={calendar_select} style={{border: calendar[count]}}>{i.date}&nbsp;&nbsp;{i.week}</div></>)
        }
        return(arr2);

    } 
    const List3 = (props) => {
        const arr2 = [];
        for(let i of props.arr){
            arr2.push(<div id={i.id} onClick={slide2_display} className='k-slide1-clock-box k-cursor'>
            <div className='k-slide1-clock-box-top'><i class="fa-solid fa-sun k-sun"></i><i class="fa-solid fa-moon k-moon"></i></div>
            <div className='k-slide1-clock-box-middle'>{i.clock}</div>
            <div className='k-slide1-clock-box-bottom'>{i.clock2}</div>
            <div className='k-slide1-clock-box-bottom2'>빈좌석/전체</div>
        </div>)
        }
        return(arr2);

    }
    const List4 = (props) => {
        const arr2 = [];
        for(let i of props.arr){
            if(i.id === parseInt(movie)){
                arr2.push(<>
                <div><img src={i.poster} width='208'></img></div></>)
            }
        }
        return(arr2);
    }
    const List5 = (props) => {
        const arr2 = [];
        for(let i of props.arr){
            if(i.id === parseInt(movie)){
            arr2.push(<>
            <div className='k-slide1-main-result-bottom-info-top'>
                <span className='k-slide1-main-result-bottom-info-age'><img src={i.img}></img></span>
                <span className='k-slide1-main-result-bottom-info-title'>{i.title}</span>
            </div>
            <div>개봉일: {i.opening}</div>
            <div>평점: {i.score}</div>
            <div>감독: {i.director}</div>
        </>)
            }
        }
        return arr2;
    }
    const List6 = (props) => {
        const arr2= [];
        for(let i of props.arr){
            arr2.push(<div className='k-grid' key={i.id} id={i.id} style={{border: poster[i.id-1], borderRadius : '15px'}} onClick={movie_select}>
            <div className='k-grid-poster'><img src={i.poster} width='100'></img></div>
            <div className='k-grid-title'>{i.title}</div>
        </div>)

        }
        return arr2;
    }
    const slidedisplayback = () => { // 이전으로
        setSlidedisplay(!slidedisplay);
    }
    const movie_select = (e) => { // 영화 선택 시 border
        console.log(e.currentTarget.id);
        poster = [];
        let arr= [];
        arr[e.currentTarget.id-1] = '2px solid #00c9c7';
        setPoster(arr);
        setMovie(e.currentTarget.id);
    }
    
    const calendar_select = (e) => { // 달력 선택시 border
        calendar = [];
        let arr = [...calendar];
        arr[e.target.id-1] = '2px solid #00c9c7';
        setCalendar(arr); // 날짜 border
        setClock(parseInt(e.target.id) + 14); // 날짜 증가
        let arr2 = [...week_arr[(e.target.id-1)%7]];
        setWeek(arr2); // 요일 증가
        
    }
    const slide2_display = (e) => {
        setClock_props(e.currentTarget.id);
        setSlide2display(!slide2display);
    }
    
    
    let [poster, setPoster] = useState([]); // movie border

    useEffect(()=>{ // image 클릭시에만 movie_select border 활성화
        let poster = [];
        let arr = [...poster];
        arr[movie_number-1] = '2px solid #00c9c7';
        setPoster(arr);
        setMovie(movie_number);
    },[movie_number]);

    const sort_score = (e) => {
        if(e.target.value !== '1'){setSort('score')}else{setSort('');}
    }
    const sort_bar = () => {
        let arr = ['#00c9c7', 'white'];
        setGrid_icon_border([...arr]);
        setGrid('bar');

    }
    const sort_grid = () => {
        let arr = ['white', '#00c9c7'];
        setGrid_icon_border([...arr]);
        setGrid('grid');

    }
    
    let [calendar, setCalendar] = useState(['2px solid #00c9c7']); // 날짜 선택시 border
    let [clock, setClock] = useState('15'); // 날짜
    let [week, setWeek] = useState(['일']); // 요일
    let [movie, setMovie] = useState(); // movie poster
    let [slide2display, setSlide2display] = useState('false'); // Slide2 display
    let [clock_props, setClock_props] = useState(1);
    let [sort, setSort] = useState(''); // 예매순 - 평점순
    let [grid, setGrid] = useState('bar'); // bar - grid
    let [grid_icon_border, setGrid_icon_border] = useState(['#00c9c7', '']); // grid icon border

    let content = null;
    switch(true){
        case sort === '' && grid === 'bar' : content = <List arr={arr} />; break;
        case sort === 'score' && grid === 'bar' : content = <List arr={sort1} />; break;
        case sort === '' && grid === 'grid' : content = <List6 arr={arr} />; break;
        case sort === 'score' &&  grid === 'grid' : content = <List6 arr={sort1} />; break;
    }
    
  return (
    <div className='k-slide1-container' style={{display: slidedisplay ? 'none' : 'block'}}>
        <Slide2 slide2display={slide2display} setSlide2display={setSlide2display} movie={movie} setMovie={setMovie} arr={arr} clock={clock} week={week} clock_arr={clock_arr} clock_props={clock_props} />
        <div>dd</div>
        <div className='k-slide1-box'>
        <div className='k-slide1-header'>
            <div className='k-slide1-header-left'>예매하기</div>
            <div className='k-slide1-header-right' onClick={slidedisplayback}><i className="fa-solid fa-circle-arrow-left"></i>  이전으로</div>
        </div>
        <div className='k-slide1-main'>
            <div className='k-slide1-main-movie'>
                <div className='k-slide1-main-movie-top'>영화</div>
                <div className='k-slide1-main-movie-middle'>
                <div className="k-main-movie-scrollbox">
                    <select className='k-select' onChange={sort_score}>
                        <option value="1">예매순</option>
                        <option value="2">평점순</option>
                    </select>
                </div>
                <div className='k-main-movie-iconbox'>
                   
                <div><i className="fa-solid fa-bars k-cursor" style={{color : grid_icon_border[0]}} onClick={sort_bar}></i></div>
                <div><i className="fa-solid fa-border-all k-cursor" style={{color : grid_icon_border[1]}} onClick={sort_grid}></i></div>
            
                </div>
                </div>
                <div className='k-main-movie-bottom'>
                    {content}
                </div>
            </div>
           
            <div className='k-slide1-main-calendar'>
                <div className='k-slide1-main-calendar-top'>날짜</div>
                <div className='k-slide1-main-calendar-middle'>
                    <div className='k-slide1-main-calendar-middle-bottom'>
                        <span>&nbsp;5월&nbsp;&nbsp;</span>
                        <List2 arr={calandar_arr} />
                    </div>
                </div>
            </div>
            
            <div className='k-slide1-main-result'>
                <div className='k-slide1-main-result-top'>종합</div>
                <div className='k-slide1-main-result-middle'>
                    <div className='k-slide1-main-result-middle-poster'><List4 arr={arr}/></div>
                    <div className='k-slide1-main-result-middle-info'>
                        <List5 arr={arr} />
                    </div>
                </div>
                <div className='k-slide1-main-result-bottom'>
                    <div className='k-slide1-main-result-bottom-date'><i className="fa-solid fa-calendar-check"></i>&nbsp;&nbsp;2022-05-{clock}({week})</div>
                    <div className='k-slide1-main-result-bottom-demension'>2D</div>
                    <div className='k-slide1-main-result-bottom-clock'>
                        <List3 arr={clock_arr} />
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Slide1