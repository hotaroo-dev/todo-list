"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion as m } from "framer-motion";
import { cn } from "@/app/utils/cn";

interface Props extends React.ComponentPropsWithoutRef<typeof Link> {
  activeClassName?: string;
}

const ActiveLink: React.FC<Props> = (props) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;
  const activeClassName = props.activeClassName ?? "text-teal-500";

  return (
    <Link
      {...props}
      className={cn(
        props.className,
        isActive && activeClassName,
        "relative transition-all hover:text-teal-400",
      )}
    >
      {props.children}
      {isActive && (
        <m.span
          layout
          layoutId="box"
          className="absolute inset-0 -z-10 rounded bg-teal-950"
        ></m.span>
      )}
    </Link>
  );
};

export default ActiveLink;
