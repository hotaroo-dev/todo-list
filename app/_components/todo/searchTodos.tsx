import { IconSearch } from "../icons/IconSearch";

const SearchTodos: React.FC = () => {
  return (
    <form className="relative w-full max-w-xs">
      <input
        className="h-10 w-full rounded-lg border bg-stone-100 pl-11 pr-4 focus-visible:outline-none"
        placeholder="search todo"
      />
      <IconSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xl" />
    </form>
  );
};

export default SearchTodos;
