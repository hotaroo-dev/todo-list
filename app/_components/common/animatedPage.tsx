"use client";

import { useContext, useRef } from "react";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { AnimatePresence } from "framer-motion";
import AnimatedItem from "./animatedItem";

// page transition - source: https://stackoverflow.com/questions/77603249/how-to-make-a-page-transition-with-framer-motion-and-next-js-14
function FrozenRouter({ children }: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {children}
    </LayoutRouterContext.Provider>
  );
}

export default function AnimatedPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <AnimatePresence initial={false} mode="wait">
      <AnimatedItem key={pathname} animation="opacity" transitionType="tween">
        <FrozenRouter>{children}</FrozenRouter>
      </AnimatedItem>
    </AnimatePresence>
  );
}
