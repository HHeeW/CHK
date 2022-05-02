import React from 'react';
import './all.css';
import Home from '../Home';
import Adver from './Adver';




function List(props){
  const lis = [];
  for(let i =0; i <props.img.length; i++){
    let t = props.img[i];
    lis.push(<li key={t.id}className="b_listBox"><img src={t.url} ></img>
    <p className='b_conTitle b_reserveTitle'>{t.name}</p>
            <p className='b_date'>{t.date}</p></li>)
  }
  return <>
  <Home /><div className='b_conBox'>
  <ul className='b_conList'>
    {lis}
 </ul>
 <Adver />
</div>
</>
}

 function Discount() {
 
  const imgL = [
    {id: 1, name : "아시아나항공 마일리지로 영화 무료", url : "b_images/할인/img1.jpg",date :"2022.04.30 ~ 2022.06.30" },
    {id: 2, name : "CHK에서 하나머니 하나로 OK!", url : "b_images/할인/img2.jpg",date :"2022.04.30 ~ 2022.06.30" },
    {id: 3, name : "일주일간 어디서나 영화 1천원!", url : "b_images/할인/img3.jpg",date :"2022.04.30 ~ 2022.06.30" },
    {id: 4, name :" 해피캐시로 CHK에서 즐거운 문화생활!", url : "b_images/할인/img4.jpg",date :"2022.04.30 ~ 2022.06.30" },
    {id: 5, name : "컴백콘 EVENT", url : "b_images/할인/img5.jpg",date :"2022.04.30 ~ 2022.06.30" },
    {id: 6, name : "온&오프라인 어디서든 영화티켓 즉시할인", url : "b_images/할인/img6.jpg",date :"2022.04.30 ~ 2022.06.30" },
    {id: 7, name : "나만의 콕으로 영화 무료 콕!", url : "b_images/할인/img7.jpg",date :"2022.04.30 ~ 2022.06.30 " },
    {id: 8, name : "매일 제공! 페이코인 결제 시 영화 50% 할인!", url : "b_images/할인/img8.jpg",date :"2022.04.10 ~ 2022.04.25" },
    {id: 9, name : "CHK우리카드 이용 시 영화관란권 5매", url : "b_images/할인/img9.jpg",date :"2022.04.30 ~ 2022.06.30" },
    {id: 10, name : "이 달의 ICECON 선착순 쿠폰 GET하자!", url : "b_images/할인/img10.jpg",date :"2022.04.30 ~ 2022.06.30" },
    {id: 11, name : "CHK 우리카드 출시 최대 5천원 할인!", url : "b_images/할인/img11.jpg",date :"2022.04.30 ~ 2022.06.30" },
    {id: 12, name : "3022냔 KT멤버십 혜택", url : "b_images/할인/img12.jpg",date :"2022.04.30 ~ 2022.06.30" }
  ]
  return (
    <>
  
        <List img={imgL}/>
        
   
    </>
  )
}
export default Discount;