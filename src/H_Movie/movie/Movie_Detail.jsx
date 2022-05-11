import React from 'react'
import { Link } from 'react-router-dom';

const detail = (props) => {
  return (
    <li className="H_movie">
      <Link to={`/Movie_Page_List/${props.id}`}>
        <div className="H_poster_box">
          <img className="H_poster" src={props.poster} alt={props.poster} />
          <div className="H_poster_text_box">
            <div className="H_poster_text">
              <p>제목: {props.title}</p>
              <p>장르: {props.gen}</p>
              <p>감독: {props.dir}</p>
              <p>배우: {props.act}</p>
            </div>
          </div>
          <div className="H_movie_number">NO.{props.id}</div>
        </div>
      </Link>
      <div className='H_detail'>
        <div className="H_name">
          <p className={props.age}></p>
          <p className='H_movie_title'>{props.title}</p>
        </div>
        <div className="H_second_name">
          <p>예매율 {props.ticketing}</p>
          <p>개봉일 {props.open}</p>
        </div>
        <div className="H_ticketing_box">
          <Link to={'/ticket'}><button className="H_ticketing">예매</button></Link>
        </div>
      </div>
    </li>
  )
}

export default detail