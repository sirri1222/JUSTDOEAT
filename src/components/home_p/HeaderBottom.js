import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HeaderBottom = () => {
  return (
    <div className="App">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img src="photo/banner7.jpg" className="w-full" alt="제품사진"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo/banner7.jpg" className="" alt="제품사진"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo/banner7.jpg" className="" alt="제품사진"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="photo/banner7.jpg" className="" alt="제품사진"></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeaderBottom;
