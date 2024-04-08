"use client";

import { motion as m } from "framer-motion";
import { cn } from "@/libs/cn";

interface Props {
  animation: "opacity" | "scale";
  transitionType?: "tween" | "spring";
  children: Readonly<React.ReactNode>;
  className?: string;
}

const variants = {
  opacity: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  },
  scale: {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { opacity: 0 },
  },
};

const transition = {
  tween: {
    type: "tween",
    duration: 0.25,
  },
  spring: {
    type: "spring",
    stiffness: 100,
    damping: 15,
  },
};

const AnimatedItem: React.FC<Props> = ({
  animation,
  transitionType,
  children,
  className,
}) => {
  transitionType = transitionType ?? "spring";
  return (
    <m.div
      variants={variants[animation]}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={transition[transitionType]}
      className={cn(className)}
    >
      {children}
    </m.div>
  );
};

export default AnimatedItem;
