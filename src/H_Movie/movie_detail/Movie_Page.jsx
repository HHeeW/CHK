import React, {useState} from 'react';
import './movie_page.css'
import Movie_Page_Slider from './Movie_Page_Slider';


const Movie_Page = (props) => {
    const [fview, setFview] = useState(true);
    const [sview, setSview] = useState(false);
    const [tview, setTview] = useState(false);
    const Fview = () =>{
        setFview(true)
        setSview(0)
        setTview(0)
    }
    const Sview = () =>{
        setFview(0)
        setSview(true)
        setTview(0)
    }
    const Tview = () =>{
        setFview(0)
        setSview(0)
        setTview(true)
    }
  return (
    <div className="H_background_poster">
        <img src={props.poster} alt="poster" />
        <div className='H_container H_background_black'>
            <div className="H_movie_top">
                <div className="H_black"></div>
                <div className="H_movie_detail">
                    <iframe className='H_movie_play' width="1200" height="550"  src={`https://www.youtube.com/embed/${props.link}?controls=0&loop=1&playlist=${props.link}&start=30&autoplay=1&mute=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div className="H_detail">
                <img className='H_detail_poster' src={props.poster} alt="" />
                <div className="H_movie_detail_text_box">
                    <h1>{props.title}</h1>
                    <h4>{props.entitle}</h4>
                    <p>감독 : {props.dir}</p> 
                    <p>배우 : {props.act}</p>
                    <p>장르 : {props.gen} / 기본 : <span className={props.age}></span> {props.bas}</p>
                    <p>개봉 : {props.open}</p>
                    <div className="H_ticketing_box">
                        <button className="H_ticketing">예매</button>
                    </div>
                </div>
            </div>
            <div className="H_detail_nav">
                <ul className="H_nav_gnb">
                    <li><button onClick={Fview} className={`${fview === true ? 'active' : ''}`}>영화 정보</button>
                        <ul className="H_nav_lnb">
                            {(fview?
                                <li className="H_information">
                                    <h1>{props.detail_title}</h1>
                                    <h4>{props.detail}</h4>
                                </li>:<></>
                            )}
                        </ul>
                    </li>
                    <li><button onClick={Sview} className={`${sview === true ? 'active' : ''}`}>관람평</button>
                        <ul className="H_nav_lnb">
                        {(sview?
                                <li> 관람평 적는 공간 만들기 </li>
                                :
                                <></>
                            )}
                        </ul>
                    </li>
                    <li><button onClick={Tview} className={`${tview === true ? 'active' : ''}`}>포스터</button>
                        <ul className="H_nav_lnb">
                        {(tview?
                                <li><Movie_Page_Slider /></li>:<></>
                            )}
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default Movie_Page