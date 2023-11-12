import FoodCard from "../../Shared/FoodCard/FoodCard";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

const OrderTab = ({ items }) => {
  const subarraySize = 3;

  const createSubarrays = (array, size) => {
    const subarrays = [];
    for (let i = 0; i < array.length; i += size) {
      subarrays.push(array.slice(i, i + size));
    }
    return subarrays;
  };
  const [result] = useState(createSubarrays(items, subarraySize));

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {result.map((subarray, index) => (
          <div key={index}>
            <SwiperSlide>
              <div className="grid w-96 sm:w-auto px-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-auto gap-10">
                {subarray.map((item) => (
                  <FoodCard key={item._id} item={item}></FoodCard>
                ))}
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
