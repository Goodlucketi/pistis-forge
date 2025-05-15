// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import clientBg from '../assets/images/client-bg.png'
import slide1 from '../assets/images/slide-01.jpg'
import slide2 from '../assets/images/slide-02.jpg'
import slide3 from '../assets/images/slide-03.jpg'

export default function HeroSection() {
  return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            className=' h-screen'
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{
                clickable:true
            }}
            autoplay={{ 
                delay: 2500, 
                disableOnInteraction: false 
            }}
            loop={true}
        >
            <SwiperSlide style={{backgroundImage:`url(${slide1})`}} className='bg-cover w-full bg-gradient-to-br from-purple-300/50 to-pink-300/50'>
                <h1 className="text-white">Igniting Faith and Innovation</h1>
                <p className="text-xl md:text-2xl max-w-2xl">Empowering believers to create tech solutions that glorifies God and serves the Church.</p>
                <div className="mt-6 space-x-4">
                    <button className="bg-white text-purple-900 px-6 py-2 rounded-full font-semibold hover:bg-purple-100">Join the Movement</button>
                    <button className="border border-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-purple-900">Learn More</button>
                </div>
            </SwiperSlide>
            <SwiperSlide style={{backgroundImage:`url(${slide2})`}} className='bg-cover w-full'>
                <h1 className="text-white">Building Community Through Technology</h1>
                <p className="text-xl md:text-2xl max-w-2xl">A faith-driven tech community equipping believers to transform the world through Spirit-led innovation.</p>
            </SwiperSlide>
            <SwiperSlide style={{backgroundImage:`url(${slide3})`}} className='bg-cover w-full'>
                <h1 className="text-white">From Convictions to Creation</h1>
                <p className="text-xl md:text-2xl max-w-2xl">Where faith-inspired ideas become impactful digital realities..</p>
            </SwiperSlide>

        </Swiper>
      


  );
}
