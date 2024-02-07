import React from "react";
import AddReview from "./AddReview";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const AllReviews = () => {
  const { data: reviews } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axios.get(
        "https://foodie-pal-server.vercel.app/add-review"
      );
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className="max-w-[1280px] mx-auto px-4 my-24">
      <AddReview></AddReview>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="w-1/2 text-center mx-auto">
          {reviews?.map((item) => (
            <SwiperSlide className="text-center mx-auto" key={item._id}>
              <div className="border-2 border-red p-12 rounded-2xl">
                <p className="md:text-2xl text-xl font-fold">
                  Review: {item.review}
                </p>
                <p className="text-xl font-medium">
                  Reviewer Name: {item.reviewerName}
                </p>
                <p className="text-xl font-medium">
                  Reviewer Email: {item.email}
                </p>
                <p className="text-xl font-medium">
                  Date: {item.date}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default AllReviews;
