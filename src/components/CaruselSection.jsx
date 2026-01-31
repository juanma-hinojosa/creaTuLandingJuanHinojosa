import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ImageSwiper() {
  const images = [
    'https://www.cacaushow.com.br/dw/image/v2/BFJD_PRD/on/demandware.static/-/Sites-CacauShow-Library/default/dw230596d4/Home/Banner-Carrossel/1264x530_ajustado_harry.png',
    'https://www.cacaushow.com.br/dw/image/v2/BFJD_PRD/on/demandware.static/-/Sites-CacauShow-Library/default/dwb04dac0e/Home/Banner-Carrossel/1264x530_Ajustado-_sonic.png',
    'https://www.cacaushow.com.br/dw/image/v2/BFJD_PRD/on/demandware.static/-/Sites-CacauShow-Library/default/dwd7c05fef/Home/Banner-Carrossel/1264x530_ajustado-infantil_batman.png',
    'https://www.cacaushow.com.br/dw/image/v2/BFJD_PRD/on/demandware.static/-/Sites-CacauShow-Library/default/dwa4535ce0/Home/Banner-Carrossel/1264x530_biscoiteria.png',
  ];

  return (
    <section 
      className='section-grid contendor-maximo'
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        autoplay={true}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              style={{ width: '100%', borderRadius: '10px' }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

  );
}

export default ImageSwiper