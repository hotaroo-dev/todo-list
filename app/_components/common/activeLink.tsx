"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion as m } from "framer-motion";
import { cn } from "@/app/_utils/cn";

interface Props extends React.ComponentPropsWithoutRef<typeof Link> {
  activeClassName?: string;
}

const ActiveLink: React.FC<Props> = (props) => {
  const pathname = usePathname();
  const isActive = pathname === props.href.pathname;
  const activeClassName = props.activeClassName ?? "text-jade-900";

  return (
    <Link
      {...props}
      className={cn(
        props.className,
        isActive && activeClassName,
        "relative transition-all hover:text-jade-950",
      )}
    >
      {props.children}
      {isActive && (
        <m.span
          layout
          layoutId="underline"
          className="absolute inset-x-0 bottom-1 -z-10 mx-auto h-0.5 w-[80%] rounded-md bg-jade-900"
        ></m.span>
      )}
    </Link>
  );
};

export default ActiveLink;
