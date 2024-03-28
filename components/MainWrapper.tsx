import { cn } from '@/lib/utils';
import Header from './Header';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function MainWrapper({ className, children }: Props) {
  return (
    <div className="rounded-3xl bg-white/[0.25] p-3 backdrop-blur-2xl">
      <Header />
      <div className={cn(className)}>{children}</div>
    </div>
  );
}

export default MainWrapper;
