import React from 'react';
import './giftshop.css';
// import React, { Component } from "react";
import Slider from "react-slick";
import FixBar from './FixBar';
import TopBar from './TopBar';
import $ from 'jquery';

const GiftShop = () => {
        var settings = {
          dots: true,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true
        };
  return (
    <>
    <TopBar />
    <div className="w_s-n">
        <h2><i class="fa-solid fa-circle"></i> gift - shop </h2>
          <div className="w_movie-shop">
            <h3><i class="fa-solid fa-minus"></i> 닥터 스트레인지: 대혼돈의 멀티버스</h3>
            <img src="w_images/doctor.jpg" alt="닥터스트레인지"></img>
          </div>
        <br></br>
        <div className="w_merchlist">
          <Slider {...settings}>
            
            
            
            <div className="w_merchlist_box ">
              <img src="w_images/doctor/marvel_airpot.jpg"></img>
              <p>마블 에어팟 케이스</p>
              <h4>32,000 원</h4>
              <h6>평점 4.1 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 524</h6>
            
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              
            </div>



            <div className="w_merchlist_box">
              <img src="w_images/doctor/marvel_cup.jpg"></img>
              <p>마블 컵</p>
              <h4>18,000 원</h4>
              <h6>평점 4.5 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 357</h6>
            
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button className='w_heart'><i class="fa-solid fa-heart"></i></button>
              </div>
            
            </div>
            <div className="w_merchlist_box">
              <img src="w_images/doctor/marvel_figure.jpg"></img>
              <p>마블 피규어 set</p>
              <h4>48,000 원</h4>
              <h6>평점 4.7 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 235</h6>
            
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
            
            </div>
            <div className="w_merchlist_box">
              <img src="w_images/doctor/marvel_tumbler.jpg"></img>
              <p>마블 텀블러 <i class="fa-brands fa-hotjar"></i></p>
              <h4>35,000 원</h4>
              <h6>평점 4.3 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 76</h6>
            
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
            
            </div>
            <div className="w_merchlist_box">
              <img src="w_images/doctor/marvel_watch.jpg"></img>
              <p>마블 탁장시계</p>
              <h4>23,000 원</h4>
              <h6>평점 2.7 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 247</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
            
            </div>
            <div className="w_merchlist_box">
              <img src="w_images/doctor/marvel_clothes.jpg"></img>
              <p>닥터스트레인지 맨투맨</p>
              <h4>47,000 원</h4>
              <h6>평점 3.9 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 566</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
            
            </div>
            <div className="w_merchlist_box">
              <img src="w_images/doctor/marvel_cushion.jpg"></img>
              <p>닥터스트레인지 쿠션</p>
              <h4>31,000 원</h4>
              <h6>평점 4.8 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 159</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
            
            </div>
            <div className="w_merchlist_box">
              <img src="w_images/doctor/marvel_hiddenbox.jpg"></img>
              <p>닥터스트레인지 랜덤 박스 <i class="fa-brands fa-hotjar"></i></p>
              <h4>77,000 원</h4>
              <h6>평점 4.8 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 777</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
            
            </div>
        </Slider>
        </div>
        <br></br><br></br><br></br>

          <div className="w_movie-shop">
            <h3><i class="fa-solid fa-minus"></i> 해리포터와 죽음의 성물 2</h3>
            <img src="w_images/harry.png" alt="해리포터"></img>
          </div>
          <br></br>
        <div className="w_merchlist">
          <Slider {...settings}>
            <div className="w_merchlist_box">
              <img src="w_images/harry/harry_note.jpg"></img>
              <p>해리포터 노트</p>
              <h4>12,000 원</h4>
              <h6>평점 3.9 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 955</h6>
            
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
            
            </div>
            <div className="w_merchlist_box">
              <img src="w_images/harry/harry_magmatic.jpg"></img>
              <p>해리포터 마그마틱</p>
              <h4>3,000 원</h4>
              <h6>평점 4.0 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 654</h6>
            
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
            
            
            </div>
            <div className="w_merchlist_box">
              <img src="w_images/harry/harry_poster.jpg"></img>
              <p>해리포터 포스터</p>
              <h4>30,000 원</h4>
              <h6>평점 2.8 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 256</h6>
            
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>

            </div>
            <div className="w_merchlist_box">
              <img src="w_images/harry/harry_clothes.jpg"></img>
              <p>해리포터 맨투맨</p>
              <h4>56,000 원</h4>
              <h6>평점 3.8 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 363</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>

            
            </div>
            <div className="w_merchlist_box">
              <img src="w_images/harry/harry_pajamas.jpg"></img>
              <p>해리포터 파자마 set <i class="fa-brands fa-hotjar"></i></p>
              <h4>50,000 원</h4>
              <h6>평점 4.6 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 745</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
            
            </div>
        </Slider>
        </div>
          <br></br><br></br><br></br>
          <div className="w_movie-shop">
            <h3><i class="fa-solid fa-minus"></i> 겨 울 왕 국</h3>
            <img src="w_images/forzen.jpg" alt="겨울왕국"></img>
          </div>
          <br></br>
        <div className="w_merchlist">
          <Slider {...settings}>
            <div className="w_merchlist_box">
              <img src="w_images/forzen/forzen_postcard.jpg"></img>
              <p>겨울왕국 5종 엽서 set</p>
              <h4>15,000 원</h4>
              <h6>평점 4.3 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 675</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
            
            
            </div>
            <div className="w_merchlist_box">
              <img src="w_images/forzen/forzen_pen.jpg"></img>
              <p>겨울왕국 볼펜</p>
              <h4>5,000 원</h4>
              <h6>평점 3.6 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 286</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
            
            </div>
            <div className="w_merchlist_box">
              <img src="w_images/forzen/forzen_cup.jpg"></img>
              <p>겨울왕국 텀블러</p>
              <h4>21,000 원</h4>
              <h6>평점 3.8 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 178</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
            <div className="w_merchlist_box">
              <img src="w_images/forzen/forzen_defuser.jpg"></img>
              <p>겨울왕국 디퓨저</p>
              <h4>34,000 원</h4>
              <h6>평점 4.1 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 171</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
            <div className="w_merchlist_box">
              <img src="w_images/forzen/forzen_lego.jpg"></img>
              <p>겨울왕국 레고 <i class="fa-brands fa-hotjar"></i></p>
              <h4>78,000 원</h4>
              <h6>평점 4.9 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 464</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
        </Slider>
        </div>
          <br></br><br></br><br></br>
          <div className="w_movie-shop">
            <h3><i class="fa-solid fa-minus"></i> 토이 스토리 4</h3>
            <img src="w_images/toystory.png" alt="토이 스토리 4"></img>
          </div>
          <br></br>
        <div className="w_merchlist">
          <Slider {...settings}>
            <div className="w_merchlist_box">
              <img src="w_images/toy/toy_puzzle.jpg"></img>
              <p>토이스토리 퍼즐 <i class="fa-brands fa-hotjar"></i></p>
              <h4>56,000 원</h4>
              <h6>평점 4.8 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 3857</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
            <div className="w_merchlist_box">
              <img src="w_images/toy/toy_body.jpg"></img>
              <p>토이스토리 X 바디판타지 미스트 <i class="fa-brands fa-hotjar"></i></p>
              <h4>8,000 원</h4>
              <h6>평점 4.9 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 560</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
            <div className="w_merchlist_box">
              <img src="w_images/toy/toy_woody.jpg"></img>
              <p>토이스토리 우디 에어팟 케이스 <i class="fa-brands fa-hotjar"></i></p>
              <h4>28,000 원</h4>
              <h6>평점 4.7 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 652</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
            <div className="w_merchlist_box">
              <img src="w_images/toy/toy_book.jpg"></img>
              <p>토이스토리 책</p>
              <h4>12,000 원</h4>
              <h6>평점 4.3 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 547</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
            <div className="w_merchlist_box">
              <img src="w_images/toy/toy_mini.jpg"></img>
              <p>토이스토리 스티커 북</p>
              <h4>8,000 원</h4>
              <h6>평점 4.4 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 345</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
        </Slider>
        </div>
          <br></br><br></br><br></br>
          
          <div className="w_movie-shop">
            <h3><i class="fa-solid fa-minus"></i> 심슨 가족: 더 무비</h3>
            <img src="w_images/simson.jpg" alt="심슨"></img>
          </div>
          <br></br>
        <div className="w_merchlist">
          <Slider {...settings}>
            <div className="w_merchlist_box">
              <img src="w_images/simson/simson_badge.jpg"></img>
              <p>심슨 벳지</p>
              <h4>2,000 원</h4>
              <h6>평점 4.2 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 876</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
            <div className="w_merchlist_box">
              <img src="w_images/simson/simson_doll.jpg"></img>
              <p>심슨 인형</p>
              <h4>33,000 원</h4>
              <h6>평점 2.1 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 679</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
            <div className="w_merchlist_box">
              <img src="w_images/simson/simson_cushion.jpg"></img>
              <p>심슨 쿠션 <i class="fa-brands fa-hotjar"></i></p>
              <h4>29,000 원</h4>
              <h6>평점 4.5 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 471</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
            <div className="w_merchlist_box">
              <img src="w_images/simson/simson_beachbag.jpg"></img>
              <p>심슨 비치가방</p>
              <h4>31,000 원</h4>
              <h6>평점 2.8 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 549</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
            <div className="w_merchlist_box">
              <img src="w_images/simson/simson_towel.jpg"></img>
              <p>심슨 비치타올</p>
              <h4>21,000 원</h4>
              <h6>평점 2.8 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 254</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
        </Slider>
        </div>
        <br></br><br></br><br></br>
          <div className="w_movie-shop">
            <h3><i class="fa-solid fa-minus"></i> 극장판 짱구는 못말려 - 격돌! 낙서왕국과 얼추 네 명의 용사들</h3>
            <img src="w_images/jjang-gu.jpg" alt="짱구"></img>
          </div>
          <br></br>
        <div className="w_merchlist">
          <Slider {...settings}>
            <div className="w_merchlist_box">
              <img src="w_images/jjanggu/jjanggu_case.jpg"></img>
              <p>짱구 핸드폰 케이스</p>
              <h4>22,000 원</h4>
              <h6>평점 4.5 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 587</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
            <div className="w_merchlist_box">
              <img src="w_images/jjanggu/jjanggu_keyring.jpg"></img>
              <p>짱구 키링 <i class="fa-brands fa-hotjar"></i></p>
              <h4>6,000 원</h4>
              <h6>평점 4.8 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 408</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
            </div>
            <div className="w_merchlist_box">
              <img src="w_images/jjanggu/jjanggu_file.jpg"></img>
              <p>짱구 파일</p>
              <h4>3,000 원</h4>
              <h6>평점 4.7 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 438</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
            <div className="w_merchlist_box">
              <img src="w_images/jjanggu/jjanggu_cup.jpg"></img>
              <p>짱구 컵</p>
              <h4>6,000 원</h4>
              <h6>평점 4.2 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 237</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
            <div className="w_merchlist_box">
              <img src="w_images/jjanggu/jjanggu_plate.jpg"></img>
              <p>짱구 냄비</p>
              <h4>27,000 원</h4>
              <h6>평점 3.8 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 637</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
            <div className="w_merchlist_box">
              <img src="w_images/jjanggu/jjanggu_blanket.jpg"></img>
              <p>짱구 이불 set <i class="fa-brands fa-hotjar"></i></p>
              <h4>78,000 원</h4>
              <h6>평점 3.2 <i class="fa-solid fa-minus"></i> <i class="fa-solid fa-heart"></i> 547</h6>
              <div className="w_list-click">
                <button><i class="fa-solid fa-cart-shopping"></i></button>
                <button><i class="fa-solid fa-gift"></i></button>
                <button><i class="fa-solid fa-heart"></i></button>
              </div>
              </div>
        </Slider>
        </div>
        
        <FixBar/>

    </div>
    </>
   
  )
}

export default GiftShop