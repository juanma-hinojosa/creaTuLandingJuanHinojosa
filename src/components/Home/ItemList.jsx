import ItemComponent from "../Item";
import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ItemSkeleton from "../ItemSkeleton";


function ItemList({ data, loading }) {
  
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        autoplay
        breakpoints={{
          0: {
            slidesPerView: 1,
            // pagination: false
          },
          1100: {
            slidesPerView: 4,
          },
        }}
      >
        {loading
        ? Array.from({ length: 5 }).map((_, index) => (
            <SwiperSlide key={index}>
              <ItemSkeleton />
            </SwiperSlide>
          ))
        : data.slice(0, 5).map((prod) => (
            <SwiperSlide key={prod.id}>
              <ItemComponent prod={prod} />
            </SwiperSlide>
          ))}
      </Swiper>
    </>

  )
}

export default ItemList