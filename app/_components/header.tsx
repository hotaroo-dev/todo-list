"use client";

import { useSearchParams } from "next/navigation";
import { motion as m, useTransform, useScroll } from "framer-motion";
import ActiveLink from "./common/activeLink";
import Avatar from "./common/avatar";

const Header: React.FC = () => {
  const searchParams = useSearchParams();
  const viewType = searchParams.get("viewType");
  const { scrollY } = useScroll();
  const boxShadow = useTransform(
    scrollY,
    [20, 40],
    ["0 0 0 #0002", "0 1px 1px #0002"],
  );

  return (
    <m.header className="sticky top-0 z-10 bg-white" style={{ boxShadow }}>
      <div className="container flex items-center py-4">
        <div className="flex flex-1 items-center">
          <Avatar fallback="T" />
          <h1 className="ml-4 font-bold uppercase text-jade-900">Todos</h1>
        </div>
        <ul className="flex justify-center gap-4">
          <ActiveLink
            href={{ pathname: "/", query: { viewType } }}
            className="rounded-md px-4 py-2"
          >
            Home
          </ActiveLink>
          <ActiveLink
            href={{ pathname: "/progress", query: { viewType } }}
            className="rounded-md px-4 py-2"
          >
            Progress
          </ActiveLink>
        </ul>
        <div className="hidden flex-1 sm:flex"></div>
      </div>
    </m.header>
  );
};

export default Header;
