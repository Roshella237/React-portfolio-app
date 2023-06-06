import React from 'react'
import './testimonials.css'
import T1 from '../../assets/IMG3.jpg'
import T2 from '../../assets/IMG4.jpg'
import T3 from '../../assets/IMG5.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
      id: 1,
      review:
        "Roshella is so Exceptional. She is commited to the work and always deliver with excellence!",
      avatar: T1,
      name: "Nji Valentine",
    },
    {
      id: 2,
      review:
        "The digital artist to brings your imaginations to life, Her creativity is astounding",
      avatar: T2,
      name: "Akwi Grace",
    },
    
    {
      id: 3,
      review:
        "Working with Roshella as my assistant Junior Frontend Development has really doubed my productivity",
      avatar: T3,
      name: " Moyopo Jemima ",

    },
  ];

export const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
       // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
          return(
         
        <SwiperSlide  key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar}/>
         </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
            {review}
            </small>
          
        </SwiperSlide>
          )
           })
         
         }
        
      </Swiper>
    </section>
  )
}
