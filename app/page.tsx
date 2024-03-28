import MainWrapper from '@/components/MainWrapper';
import ProductCard from '@/components/ProductCard';

function page() {
  return (
    <MainWrapper className="flex items-center justify-center">
      <ProductCard
        name="Chinese Money"
        price={220}
        source="/static/plants/plant-1.png"
      />
    </MainWrapper>
  );
}

export default page;
