import React, { useEffect, useState } from "react";
import Story from "./Story";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import axios from "axios";

import { FreeMode } from "swiper";

export default function StoriesContainer() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((response) => setUser(response.data.results))
      .catch((err) => console.error(err.message + "😂"));
  }, []);

  return (
    <>
      <Swiper
        style={{ paddingTop: "70px" }}
        slidesPerView={8}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {user.map((el, i) => {
          return (
            <SwiperSlide key={i} style={{ cursor: "pointer" }}>
              <Story
                key={i}
                img={el?.picture?.thumbnail}
                name={el?.name?.first}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
