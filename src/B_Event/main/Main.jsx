import './main.css';
import React from 'react'


function ListBox(props){
  const list =[];
  for(let i =0; i <props.img.length;i++){
    let t = props.img[i];
    list.push( <li>
      <img src={t.url} alt={t.id} />
      <p className='b_boxTitle'>{t.name}</p>
    </li>)
  }
  return <div className='b_adBox'>
  <div className='b_tool'>
    <a href="#"> 더보기 </a>
  </div>
    <div className='b_ad'>
      <ul className='b_List'>
   {list}

      </ul>
    </div>
    </div>
 
 }

function Main() {
    const imgBox =[
      {id: 1, name : "닥터 스트레인지 : 대혼돈의 멀티버스 리미티드 포스터", url : "b_images/예매/img1.jpg",date :"2022.03.23 ~ 2022.04.07" },
      {id: 2, name : "닥터 스트레인지 : 대혼돈의 멀티버스 행운의 래플", url : "b_images/예매/img2.jpg",date :"2022.03.23 ~ 2022.04.07" },
      {id: 3, name : "앵커 CHK 필름마크", url : "b_images/예매/img3.jpg",date :"2022.03.23 ~ 2022.04.07" },
      {id: 4, name : "해리포터 죽음의 성물2 시사회", url : "b_images/시사회/img2.jpg",date :"2022.03.23 ~ 2022.04.07" },
      {id: 5, name : "앵커 VIP 시사회", url : "b_images/시사회/img3.jpg",date :"2022.03.23 ~ 2022.04.07" },
      {id: 6, name :" 주술회전 무례한 시사회", url : "b_images/시사회/img4.jpg",date :"2022.04.10 ~ 2022.04.25" },
      {id: 7, name : "아시아나항공 마일리지로 영화 무료", url : "b_images/할인/img1.jpg",date :"2022.04.30 ~ 2022.06.30" },
      {id: 8, name : "CHK에서 하나머니 하나로 OK!", url : "b_images/할인/img2.jpg",date :"2022.04.30 ~ 2022.06.30" },
      {id: 9, name : "일주일간 어디서나 영화 1천원!", url : "b_images/할인/img3.jpg",date :"2022.04.30 ~ 2022.06.30" }
   ];
     return (
       
       <>
       <div className='b_etcBox'>
         <div className='b_etc'>
          <div className='b_notice'>
            <div>
              <span>공지사항 </span>
              <a href="#"> more </a>
            </div>
            <ul> 
              <li><a href="#"> [행사/이벤트] 극장안내 </a></li>
              <li><a href="#"> [행사/이벤트] 극장안내 </a></li>
              <li><a href="#"> [행사/이벤트] 극장안내 </a></li>
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

            <ListBox img={imgBox}/>

             
          </div> 
       </>
     )
   }
 
 export default Main