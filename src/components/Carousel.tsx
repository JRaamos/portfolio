// import React from 'react';
import Slider from 'react-slick';
import { projectsDetails } from '../utils/projectsDetails';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomNextArrow from './CustomNextArrow';
import CustomPrevArrow from './CustomPrevArrow';

function Carousel({ id }: { id: string | undefined }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider { ...settings }>
      {
      projectsDetails[Number(id)].imgs.map((image, index) => (
        <img
          key={ index }
          src={ image }
          alt={ projectsDetails[Number(id)].title }
          className="rounded-2xl h-[50vh] w-full max-[840px]:h-[40vh]
          max-sm:h-[37vh] max-[570px]:h-[30vh] max-[450px]:h-[25vh] max-[379px]:h-[22vh]"
        />
      ))
    }
    </Slider>
  );
}

export default Carousel;
