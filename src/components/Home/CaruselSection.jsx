import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ImageSwiper({ data}) {
  return (
    <section className="section-grid contendor-maximo">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        autoplay={true}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.img}
              alt={`slide-${index}`}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}


export default ImageSwiper