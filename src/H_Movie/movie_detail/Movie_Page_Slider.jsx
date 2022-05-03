import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow, Pagination, Navigation } from "swiper";

const Movie_Page_Slider = () => {
  return (
    <Swiper
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
      <SwiperSlide><img className='H_Movie_Page_Slider' src="H_images/slider/d1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='H_Movie_Page_Slider' src="H_images/slider/d2.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='H_Movie_Page_Slider' src="H_images/slider/d3.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='H_Movie_Page_Slider' src="H_images/slider/d4.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='H_Movie_Page_Slider' src="H_images/slider/d5.jpg" alt="" /></SwiperSlide>
    </Swiper>
  )
}

export default Movie_Page_Slider