import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperComponent = ({ swiperImage }) => {
  return (
    <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        autoplay
        style={{ width: '1200px', height: '400px' }}
    >
      {swiperImage.map(item =>
        <SwiperSlide key={item.url}>
          <img
            src={item.url}
            alt='sfddsfdsfsdfs'
            style={{ height: '400px', width: '350px' }}
          />
        </SwiperSlide>
      )}
    </Swiper>
  );
};
