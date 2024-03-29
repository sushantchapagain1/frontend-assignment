'use client';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import type { Settings } from 'react-slick';
import { cn } from '@/lib/utils';

function Slide({
  children,
  options,
  className,
}: {
  options: Settings;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Slider {...options} className={cn(className)}>
      {children}
    </Slider>
  );
}

export default Slide;
