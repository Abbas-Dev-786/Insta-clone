import React from "react";
import Stories from "react-insta-stories";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow } from "swiper";
import { useNavigate } from "react-router-dom";

export default function UserStory() {
  const stories = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZ1_V3GfnvpOGPR0GVDSBWH-s-PrPfpkN-A&usqp=CAU",
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeUgrJmzcN5y70qpo61-ssLWTQoDr4qpviaA&usqp=CAU",
      duration: 5000,
      header: {
        heading: "Mohit Karekar",
        subheading: "Posted 30m ago",
        profileImage: "https://picsum.photos/100/100",
      },
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="bg-dark m-0 p-0">
      <span
        style={{
          color: "#fff",
          float: "right",
          marginRight: "10px",
          marginTop: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/home");
        }}
      >
        &#10006;
      </span>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        pagination={true}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Stories
            stories={stories}
            defaultInterval={1500}
            width={350}
            height={629}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Stories
            stories={stories}
            defaultInterval={1500}
            width={350}
            height={629}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Stories
            stories={stories}
            defaultInterval={1500}
            width={350}
            height={629}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Stories
            stories={stories}
            defaultInterval={1500}
            width={350}
            height={629}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Stories
            stories={stories}
            defaultInterval={1500}
            width={350}
            height={629}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Stories
            stories={stories}
            defaultInterval={1500}
            width={350}
            height={629}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Stories
            stories={stories}
            defaultInterval={1500}
            width={350}
            height={629}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
