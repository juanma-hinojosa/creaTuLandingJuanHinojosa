import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

function SwipperComponent() {
  return (
    <section style={{textAlign:'center', padding:'10px', backgroundColor:'rgb(89, 56, 56)'}} >
      <Swiper
        modules={[Autoplay]}
        loop
        autoplay={{delay: 5000}}
      >
        <SwiperSlide>
          Entrega gratis en pedidos de mas de $ 150.000, 00 🚚
        </SwiperSlide>

        <SwiperSlide>
          El verdadero sabor del chocolate 🍫
        </SwiperSlide>

        <SwiperSlide>
          Ofertas de Pascua 🐇
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default SwipperComponent

