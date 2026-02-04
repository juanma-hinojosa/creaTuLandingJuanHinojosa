import CardComponent from "./CardComponent"
import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function ImgList() {
  const imgList = [
    {
      img: "https://www.cacaushow.com.br/dw/image/v2/BFJD_PRD/on/demandware.static/-/Sites-CacauShow-Library/default/dw4189b8dc/Home/Linhas/banner_1080x1500_nossas-linhas_lacreme.png"
    }, {
      img: "https://www.cacaushow.com.br/dw/image/v2/BFJD_PRD/on/demandware.static/-/Sites-CacauShow-Library/default/dwa816b1e6/Home/Linhas/banner_1080x1500_nossas-linhas_especiais.png"
    },
    {
      img: "https://www.cacaushow.com.br/dw/image/v2/BFJD_PRD/on/demandware.static/-/Sites-CacauShow-Library/default/dwa8c661f8/Home/Linhas/banner_1080x1500_nossas-linhas_dreams.png"
    },
    {
      img: "https://www.cacaushow.com.br/dw/image/v2/BFJD_PRD/on/demandware.static/-/Sites-CacauShow-Library/default/dw03b437a0/Home/Linhas/banner_1080x1500_nossas-linhas_lanut.png"
    },
    { img: 'https://www.cacaushow.com.br/dw/image/v2/BFJD_PRD/on/demandware.static/-/Sites-CacauShow-Library/default/dw14455cd0/Home/Linhas/banner_1080x1500_nossas-linhas_bytes.png' }
  ]
  return (
    
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop
          spaceBetween={20}
          // slidesPerView={1}
          autoplay
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            781: {
              slidesPerView: 4,
            },
          }}
        >
          {imgList.map((img, index) => (
            <SwiperSlide key={index}>
              <CardComponent img={img} />
            </SwiperSlide>
          ))}
        </Swiper>

  )
}

export default ImgList