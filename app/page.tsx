import BackgroundImageWrapper from '@/components/BackgroundImageWrapper';

function page() {
  return (
    <BackgroundImageWrapper source="/static/bg-images/bg-1.png">
      <div className="container mx-auto p-3">app</div>
    </BackgroundImageWrapper>
  );
}

export default page;
