import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Slider() {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <img width='300' src="https://swiperjs.com/images/clients/mcdonalds.svg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img width='300' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShlMiUMu0T8DeE3ZcjmYezjtOs4bgSCcfHQ&usqp=CAU" alt="" />
                </SwiperSlide>
            <SwiperSlide>
            <img width='300' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS3kUkHVv3fT4Ezzz5p0ySKn3_lZlE2O2H1g&usqp=CAU" alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img width='300' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuD7m279pJs_QPcVqfJGTV0DMXAXtM1eM4mQ&usqp=CAU" alt="" />
            </SwiperSlide>
            ...
        </Swiper>
    )
}

export default Slider