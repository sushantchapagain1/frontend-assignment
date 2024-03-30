'use client';

import { useState } from 'react';
import type { Settings } from 'react-slick';

import type { TProduct } from '../ProductCard';
import Slider from './Slider';
import ProductCard from '../ProductCard';

type Props = {
  products: TProduct[];
};

function ProductSlider({ products }: Props) {
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

  const options: Settings = {
    // autoplay: true,
    // speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    cssEase: 'linear',
    className: 'center',
    centerPadding: '3px',

    arrows: false,
    beforeChange: (_: number, nextSlide: number) =>
      setCurrentSlideNumber(nextSlide),
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider options={options} className="w-full py-3 lg:w-[900px]">
      {products.map((product, index) => {
        const isActive = Boolean(currentSlideNumber === index);
        return (
          <ProductCard key={product.id} {...product} isActive={isActive} />
        );
      })}
    </Slider>
  );
}

export default ProductSlider;
