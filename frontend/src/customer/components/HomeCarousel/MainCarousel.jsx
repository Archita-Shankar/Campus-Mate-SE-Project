import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouselData } from './MainCarouselData';

const MainCarousel = () => {
  const items = MainCarouselData.map((item) => (
    <img
      className="cursor-pointer object-cover w-full h-[600px]"
      role="presentation"
      src={item.image}
      alt=""
    />
  ));

  return (
    <div className="relative z-10">
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
};

export default MainCarousel;
