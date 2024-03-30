import { promises as fs } from 'fs';

import MainWrapper from '@/components/MainWrapper';

import ProductSlider from '@/components/Slider/ProductSlider';
import { Suspense } from 'react';
import Skeleton from '@/components/Slider/Skeleton';

async function page() {
  const file = await fs.readFile(process.cwd() + '/db.json', 'utf8');
  const { products } = JSON.parse(file);

  return (
    <MainWrapper className="!relative flex items-center justify-center pb-6">
      <Suspense
        fallback={
          <div className="flex gap-3">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        }
      >
        <ProductSlider products={products} />
      </Suspense>
    </MainWrapper>
  );
}

export default page;
