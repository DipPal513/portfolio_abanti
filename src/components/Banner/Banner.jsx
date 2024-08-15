"use client";
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
export default function Banner() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow:true,
        // nextArrow: <MdOutlineKeyboardArrowLeft to="next" className='next-arrow arrow text-black-500'/>,
        // prevArrow: <MdOutlineKeyboardArrowLeft to="prev" className='arrow prev-arrow text-black-500'/>,
      };
  return (
    <div className="banner w-full">
        <div className="max-w-screen-xl px-2">
            <Slider {...settings} className='mx-10'>
                <div className="items">
                    <img src="https://images.unsplash.com/photo-1707914688546-5e9499a95d92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFic3RyYWN0JTIwYXJ0fGVufDB8MHwwfHx8MA%3D%3D" alt="image" />
                </div>
                <div className="items">
                    <img src="https://images.unsplash.com/photo-1707914688546-5e9499a95d92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFic3RyYWN0JTIwYXJ0fGVufDB8MHwwfHx8MA%3D%3D" alt="image" />
                </div>
            </Slider>
        </div>
    </div>
  )
}
