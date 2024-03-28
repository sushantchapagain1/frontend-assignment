import { LockIcon } from './icons';

function UrlBar() {
  return (
    <div className="hidden w-fit items-center gap-3 rounded-full bg-white/35 px-6 py-3 text-gray-700 md:flex md:w-3/6 md:px-9">
      <LockIcon />
      <p className="text-sm md:text-base">https:\\www.myplant.com\\</p>
    </div>
  );
}

export default UrlBar;
