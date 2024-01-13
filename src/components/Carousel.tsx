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
      <img
        src={ projectsDetails[Number(id)].img }
        alt=""
        className="rounded-2xl h-[50vh] w-full"
      />
      <img
        src={ projectsDetails[Number(id)].img2 }
        alt=""
        className="rounded-2xl h-[50vh] w-full"
      />
      <img
        src={ projectsDetails[Number(id)].img3 }
        alt=""
        className="rounded-2xl h-[50vh] w-full"
      />
      <img
        src={ projectsDetails[Number(id)].img4 }
        alt=""
        className="rounded-2xl h-[50vh] w-full"
      />
    </Slider>
  );
}

export default Carousel;
