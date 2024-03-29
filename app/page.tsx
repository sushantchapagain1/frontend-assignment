import { promises as fs } from 'fs';

import MainWrapper from '@/components/MainWrapper';

import ProductSlider from '@/components/Slider/ProductSlider';

async function page() {
  const file = await fs.readFile(process.cwd() + '/db.json', 'utf8');
  const { products } = JSON.parse(file);

  return (
    <MainWrapper className="relative flex items-center justify-center">
      <ProductSlider products={products} />
    </MainWrapper>
  );
}

export default page;
