"use client"
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function SwiperJS () {
  return (
    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-navigation-size': '20px',
        '--swiper-pagination-color': '#fff',
      }}
      modules={[Navigation]}
      navigation={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      breakpoints={{
        1025: {
          slidesPerView: 4,
          spaceBetween: 40,
          navigation: 'false',
          modules: []
        }
      }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="text- text-nowrap">
            <span className="flex justify-center gap-1 items-center"><VerifiedOutlinedIcon className="w-5 h-5" />30-DAY SATISFACTION GUARANTEE</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text- text-nowrap">
            <span className="flex justify-center gap-1 items-center"><VerifiedOutlinedIcon className="w-5 h-5" />FREE DELIVERY ON ORDERS OVER $40.00</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text- text-nowrap">
            <span className="flex justify-center gap-1 items-center"><VerifiedOutlinedIcon className="w-5 h-5" />50.000 + HAPPY CUSTOMERS</span>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="text- text-nowrap">
            <span className="flex justify-center gap-1 items-center"><VerifiedOutlinedIcon className="w-5 h-5" />100% MONEY BACK GUARANTEE</span>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};