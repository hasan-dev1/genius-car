import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import './HomeBanner.css'

const HomeBanner = ({ homedata }) => {
  const {slide, image, prev, next} = homedata;
  return (
    <SplideSlide className="h-full" key={slide.src}>
      <img className='rounded-lg w-full' src={image} alt="" />
    </SplideSlide>
  );
};

export default HomeBanner;