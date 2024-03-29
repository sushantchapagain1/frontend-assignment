import { SearchIcon } from './icons';

function SearchBar() {
  return (
    <div className="flex w-fit items-center rounded-full bg-white/40 px-3  py-2">
      <input
        placeholder="Search"
        className="bg-transparent outline-none placeholder:text-sm"
      />
      <button>
        <SearchIcon height={24} width={24} />
      </button>
    </div>
  );
}

export default SearchBar;
