import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-20"
    >
      <SwiperSlide>
        <img className="mx-auto" src={slide1} alt="" />
        <p className="text-center text-4xl uppercase -mt-20 text-white ">
          Salads
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="mx-auto" src={slide2} alt="" />
        <p className="text-center text-4xl uppercase -mt-20 text-white ">
          Pizzas
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="mx-auto" src={slide3} alt="" />
        <p className="text-center text-4xl uppercase -mt-20 text-white ">
          Soups
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="mx-auto" src={slide4} alt="" />
        <p className="text-center text-4xl uppercase -mt-20 text-white ">
          Desserts
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="mx-auto" src={slide3} alt="" />
        <p className="text-center text-4xl uppercase -mt-20 text-white ">
          Soups
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <img className="mx-auto" src={slide2} alt="" />
        <p className="text-center text-4xl uppercase -mt-20 text-white ">
          Pizzas
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;
