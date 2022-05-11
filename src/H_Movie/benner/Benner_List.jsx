import { EffectCreative, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import List_Page from '../List/List_Page';

const Benner_List = ({number}) => {
  let movies = List_Page();
  let Swiper_Slides = [];
      Swiper_Slides = 
      <Swiper
      effect={"creative"}
        grabCursor={true}
        loop={true}
        slidesPerView={2}
        spaceBetween={30}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Pagination]}
        className="mySwiper2"
        >
            <SwiperSlide>
                <img src={movies[number].slider1} alt="slide_poster" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={movies[number].slider2} alt="slide_poster" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={movies[number].slider3} alt="slide_poster" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={movies[number].slider4} alt="slide_poster" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={movies[number].slider5} alt="slide_poster" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={movies[number].slider6} alt="slide_poster" />
            </SwiperSlide>
        </Swiper>
  return (
    <>
        {Swiper_Slides}
    </>
    )
}

export default Benner_List