"use client";

import { ChangeEvent, useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { mergeQueryString } from "@/libs/queryString";
import { IconSearch } from "../icons/IconSearch";

const SearchTodos: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") ?? "";
  const createQueryString = useCallback(
    (name: string, value: string) =>
      mergeQueryString(searchParams, name, value),
    [searchParams],
  );

  const onChange = (e: ChangeEvent) => {
    const search = (e.target as HTMLInputElement).value;
    router.push(pathname + "?" + createQueryString("searchTerm", search));
  };

  return (
    <form className="relative mr-auto w-full max-w-xs sm:mr-0">
      <input
        className="h-10 w-full rounded-lg pl-11 pr-4"
        type="text"
        name="searchTerm"
        placeholder="search todo"
        defaultValue={searchTerm}
        onChange={onChange}
      />
      <button
        type="submit"
        className="absolute left-4 top-1/2 -translate-y-1/2 "
      >
        <IconSearch className="text-xl" />
      </button>
    </form>
  );
};

export default SearchTodos;
