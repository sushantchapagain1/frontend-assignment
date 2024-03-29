import { HEADER_LINKS } from '@/constants';
import SearchBar from './SearchBar';

function Header() {
  return (
    <header className="mb-10 flex flex-col items-center justify-between gap-6 text-gray-700 sm:flex-row">
      <div className="flex gap-3">
        {HEADER_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <button
              className="rounded-full bg-white/20 p-2 transition-all duration-300 hover:-translate-y-2"
              key={link.id}
            >
              <Icon height={24} width={24} />
            </button>
          );
        })}
      </div>
      <SearchBar />
    </header>
  );
}

export default Header;
