import React from 'react'
import SwiperComp from '../components/Swiper';
import '../styles/Testimonials.css'

export default function Testimonials() {
  return (
    <div>
      <section className="testimonials" id="testimonials">
        <div className="testimonials-main-div">
          <div className="underline"></div>
          <h2>What our students say</h2>
        </div>
        <div className="swiper-div">
          <SwiperComp/>
        </div>
      </section>
    </div>
  )
}