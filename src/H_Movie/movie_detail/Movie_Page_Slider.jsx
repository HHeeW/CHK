import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import List_Page from "../List/List_Page";

const Movie_Page_Slider = () => {
  let movie = parseInt(window.location.pathname.substr(17, ));
  let list = List_Page()
  
  console.log(list[0].slider1)
  let Swiper_Slides = null;
  for(let i in list){
    if(parseInt(i)+1 == movie){
      console.log(movie)
      Swiper_Slides = <Swiper
        effect={"coverflow"}
        grabCursor={true}
        navigation={true}
        pagination={{
          type: "fraction",
        }}
        autoplay={{
          delay: 5000
        }}
        coverflowEffect={{
          rotate: 100,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        >
          <SwiperSlide><img className='H_Movie_Page_Slider' src={`${list[i].slider1}`} alt="slider_poter1" /></SwiperSlide>
          <SwiperSlide><img className='H_Movie_Page_Slider' src={`${list[i].slider2}`} alt="slider_poter2" /></SwiperSlide>
          <SwiperSlide><img className='H_Movie_Page_Slider' src={`${list[i].slider3}`} alt="slider_poter3" /></SwiperSlide>
          <SwiperSlide><img className='H_Movie_Page_Slider' src={`${list[i].slider4}`} alt="slider_poter4" /></SwiperSlide>
          <SwiperSlide><img className='H_Movie_Page_Slider' src={`${list[i].slider5}`} alt="slider_poter5" /></SwiperSlide>
          <SwiperSlide><img className='H_Movie_Page_Slider' src={`${list[i].slider6}`} alt="slider_poter6" /></SwiperSlide>
        </Swiper>
    }
  }
  
  return Swiper_Slides
}

export default Movie_Page_Slider