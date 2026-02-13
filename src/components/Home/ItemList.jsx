import ItemComponent from "../Item";
import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function ItemList({ data }) {
  return (
    <>
      {/* <div className="products-container">

        {data.map((prod) => <ItemComponent key={prod.id} prod={prod} />)}
      </div> */}

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
        {data.slice(0,5).map((prod, index) => (
          <SwiperSlide key={index}>
            <ItemComponent key={prod.id} prod={prod} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>

  )
}

export default ItemList