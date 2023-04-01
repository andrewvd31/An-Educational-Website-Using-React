import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import '../styles/Swiper.css'
import Testimonial from '../assets/testimonial-1.jpg'
import Testimonial1 from '../assets/testimonial-2.jpg'
import Testimonial2 from '../assets/testimonial-3.jpg'
import Testimonial3 from '../assets/testimonial-4.jpg'

export default function SwiperComp() {
  return (
    <div>
        <Swiper 
            spaceBetween={40}
            autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            modules={[Autoplay, Pagination]}
        >
            <div className="swiper-slide">
                <SwiperSlide>
                    <div className="swiper-above-text">
                        <h3>"</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla 
                        sapiente suscipit repellendus commodi blanditiis voluptatem 
                        nihil! Assumenda quod aperiam veritatis. Libero rem placeat 
                        labore qui. Cupiditate consectetur velit asperiores nobis!</p>
                        <img src={Testimonial} className="swiper-img" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-above-text">
                        <h3>"</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla 
                        sapiente suscipit repellendus commodi blanditiis voluptatem 
                        nihil! Assumenda quod aperiam veritatis. Libero rem placeat 
                        labore qui. Cupiditate consectetur velit asperiores nobis!</p>
                        <img src={Testimonial1} className="swiper-img" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-above-text">
                        <h3>"</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla 
                        sapiente suscipit repellendus commodi blanditiis voluptatem 
                        nihil! Assumenda quod aperiam veritatis. Libero rem placeat 
                        labore qui. Cupiditate consectetur velit asperiores nobis!</p>
                        <img src={Testimonial2} className="swiper-img" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-above-text">
                        <h3>"</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla 
                        sapiente suscipit repellendus commodi blanditiis voluptatem 
                        nihil! Assumenda quod aperiam veritatis. Libero rem placeat 
                        labore qui. Cupiditate consectetur velit asperiores nobis!</p>
                        <img src={Testimonial3} className="swiper-img" alt="" />
                    </div>
                </SwiperSlide>
            </div>
        </Swiper>
    </div>
  )
}