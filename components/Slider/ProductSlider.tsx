'use client';
import { SwiperSlide, type SwiperProps } from 'swiper/react';
import type { TProduct } from '../ProductCard';

import Slider from './Slider';
import ProductCard from '../ProductCard';

type Props = {
  products: TProduct[];
};

function ProductSlider({ products }: Props) {
  console.log(products.length);
  const options: SwiperProps = {};
  return (
    <Slider options={options}>
      {products.length > 0 &&
        products.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <ProductCard {...product} />
            </SwiperSlide>
          );
        })}
    </Slider>
  );
}

export default ProductSlider;
