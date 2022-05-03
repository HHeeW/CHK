import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";
import List_Page from "../List/List_Page";

const Movie_Page_Slider = () => {
  let movie = parseInt(window.location.pathname.substr(16, ));
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
          <SwiperSlide><img className='H_Movie_Page_Slider' src={`H_images/slider/${list[i].slider1}.jpg`} alt="d1" /></SwiperSlide>
          <SwiperSlide><img className='H_Movie_Page_Slider' src={`H_images/slider/${list[i].slider2}.jpg`} alt="d2" /></SwiperSlide>
          <SwiperSlide><img className='H_Movie_Page_Slider' src={`H_images/slider/${list[i].slider3}.jpg`} alt="d3" /></SwiperSlide>
          <SwiperSlide><img className='H_Movie_Page_Slider' src={`H_images/slider/${list[i].slider4}.jpg`} alt="d4" /></SwiperSlide>
          <SwiperSlide><img className='H_Movie_Page_Slider' src={`H_images/slider/${list[i].slider5}.jpg`} alt="d5" /></SwiperSlide>
          <SwiperSlide><img className='H_Movie_Page_Slider' src={`H_images/slider/${list[i].slider6}.jpg`} alt="d6" /></SwiperSlide>
        </Swiper>
    }
  }
  
  return (
    Swiper_Slides
  )
}

export default Movie_Page_Slider