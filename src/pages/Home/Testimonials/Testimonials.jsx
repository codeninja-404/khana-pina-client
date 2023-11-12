import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="my-20">
      <SectionTitle
        heading="Testimonials"
        subHeading="What Our Clients Say"
      ></SectionTitle>

      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {reviews?.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="mx-8 md:mx-40 mt-10 text-center">
              <Rating className="mx-auto my-6"
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p>{review.details}</p>
              <p className="my-6 text-2xl uppercase font-bold text-orange-500">
                {review.name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </section>
  );
};

export default Testimonials;
