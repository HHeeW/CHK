import React, { Component } from 'react'
import $ from 'jquery';


export default class Adver extends Component {
render() {
  setInterval(slide,5000);

  function slide(){
    $(function(){
    $('.b_sideImg').animate({
      'top' : '-300px'
    },1000,function(){
      $('.b_sideImg img:eq(0)').clone().appendTo('.b_sideImg');
      $('.b_sideImg img:eq(0)').remove();
      $('.b_sideImg').css('top',0);
    })
  })
}

   const imgList = [
    {id : 1, url : "b_images/sideimg1.jpg"},
    {id : 2, url : "b_images/sideimg2.jpg"},
    {id : 3, url : "b_images/sideimg3.jpg"},
    {id : 4, url : "b_images/sideimg4.jpg"},
    {id : 5, url : 'b_images/img1.jpg'}
  ]
    return (
      <>
      <div className='b_side'>
        <div className='b_sideBox'>
       <div className='b_sideImg'>  
        <img src={imgList[4].url}  alt={imgList[4].id}/>
         <img src={imgList[0].url}  alt={imgList[0].id}/>
         <img src={imgList[2].url}  alt={imgList[2].id}/>
         <img src={imgList[3].url}  alt={imgList[3].id}/>
      </div>
  </div>
    <div className='b_side'>
         <img src={imgList[1].url} alt={imgList[1].id}/>
      </div> 
      </div>   
   </>
    )
  }
}
