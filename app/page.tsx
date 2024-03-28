import SideNav from '@/components/Sidenav';
import UrlBar from '@/components/UrlBar';
import BackgroundImageWrapper from '@/components/BackgroundImageWrapper';

function page() {
  return (
    <BackgroundImageWrapper source="/static/bg-images/bg-1.png">
      <div className="justify-enter mx-auto flex h-full max-w-[1200px] flex-col items-center justify-between p-6 md:p-20">
        <UrlBar />
        <div className="flex w-full flex-col items-center gap-6 md:mt-10 md:flex-row">
          <SideNav />
          <main className="h-[450px] w-full self-start justify-self-start rounded-2xl bg-white/10 p-3 backdrop-blur-md">
            slider
          </main>
        </div>
      </div>
    </BackgroundImageWrapper>
  );
}

export default page;
