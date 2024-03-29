import MainWrapper from '@/components/MainWrapper';

import ProductSlider from '@/components/Slider/ProductSlider';
import { BACKEND_URL } from '@/constants';
import { Suspense } from 'react';

async function getProducts() {
  const data = await fetch(`${BACKEND_URL}/products`, { method: 'GET' });
  return data.json();
}

async function page() {
  const products = await getProducts();

  return (
    <MainWrapper className="flex items-center justify-center">
      <Suspense fallback="Loading..">
        <ProductSlider products={products} />
      </Suspense>
    </MainWrapper>
  );
}

export default page;
