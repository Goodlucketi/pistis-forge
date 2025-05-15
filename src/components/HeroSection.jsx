// import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// import clientBg from '../assets/images/client-bg.png'
import slide1 from '../assets/images/slide-01.jpg'
import slide2 from '../assets/images/slide-02.jpg'
import slide3 from '../assets/images/slide-03.jpg'
import Join from './Join';

export default function HeroSection() {
  return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            className='h-screen bg-gray-600 '
            effect="fade"
            spaceBetween={0}
            slidesPerView={1}
            // navigation
            pagination={{
                clickable:true
            }}
            autoplay={{ 
                delay: 5000, 
                disableOnInteraction: false 
            }}
            loop={true}
        >
            <SwiperSlide style={{backgroundImage:`url(${slide1})`}} className='bg-cover  bg-no-repeat md:bg-cover w-full'>
                <div className='py-90 md:py-70 text-center md:w-9/12 mx-auto'>
                    <h1 className="text-white text-4xl md:text-5xl font-serif">Igniting <span className='text-yellow-400'>Faith</span> and <span className='text-yellow-400'>Innovation</span></h1>
                    <p className="text-xl text-orange-300 my-5 w-10/12 mx-auto md:text-2xl">Empowering believers to create tech solutions that glorifies God and serves the Church.</p>
                    <Join />
                </div>
               
            </SwiperSlide>
            <SwiperSlide style={{backgroundImage:`url(${slide2})`}} className='bg-cover bg-center bg-no-repeat md:bg-cover w-full'>
                <div className='py-90 md:py-70 text-center md:w-10/12 mx-auto'>
                    <h1 className="text-white text-4xl md:text-5xl font-serif">Building <span className='text-yellow-400'>Community</span> Through <span className='text-yellow-400'>Technology</span></h1>
                    <p className="text-xl text-orange-300 my-5 w-10/12 mx-auto md:text-2xl">A faith-driven tech community equipping believers to transform the world through Spirit-led innovation.</p>
                    <Join />
                </div>
               
            </SwiperSlide>
            <SwiperSlide style={{backgroundImage:`url(${slide3})`}} className='bg-cover bg-center bg-no-repeat md:bg-cover w-full'>
                <div className='py-90 md:py-70 text-center md:w-10/12 mx-auto'>
                    <h1 className="text-white text-4xl md:text-5xl font-serif">From <span className='text-yellow-400'>Convictions</span> to <span className='text-yellow-400'>Creation</span></h1>
                    <p className="text-xl text-orange-300 my-5 w-10/12 mx-auto md:text-2xl">Where faith-inspired ideas become impactful digital realities..</p>
                    <Join />
                </div>
              
            </SwiperSlide>

        </Swiper>
      


  );
}
