import MainWrapper from '@/components/MainWrapper';

import ProductSlider from '@/components/Slider/ProductSlider';
import { BACKEND_URL } from '@/constants';

console.log(BACKEND_URL);

async function getProducts() {
  const data = await fetch(`${BACKEND_URL}/products`, { method: 'GET' });
  return data.json();
}

async function page() {
  const products = await getProducts();

  return (
    <MainWrapper className="relative flex items-center justify-center">
      <ProductSlider products={products} />
    </MainWrapper>
  );
}

export default page;
