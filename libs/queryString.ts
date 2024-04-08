import { ReadonlyURLSearchParams } from "next/navigation";

// Get a new searchParams string by merging the current
// searchParams with a provided key/value pair
export const mergeQueryString = (
  searchParams: ReadonlyURLSearchParams,
  name: string,
  value: string,
) => {
  const params = new URLSearchParams(searchParams.toString());
  params.set(name, value);

  return params.toString();
};
