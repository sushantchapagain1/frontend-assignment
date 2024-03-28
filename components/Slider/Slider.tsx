'use client';
import 'swiper/css';
import type { SwiperProps } from 'swiper/react';

import { Swiper } from 'swiper/react';

function Slider({
  children,
  options,
}: {
  options: SwiperProps;
  children: React.ReactNode;
}) {
  return <Swiper {...options}>{children}</Swiper>;
}

export default Slider;
