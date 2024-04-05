"use client";

import { motion as m } from "framer-motion";

interface Props {
  animation: "opacity";
  transitionType?: "tween" | "spring";
  children: Readonly<React.ReactNode>;
}

const variants = {
  opacity: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
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
}) => {
  transitionType = transitionType ?? "spring";
  return (
    <m.div
      variants={variants[animation]}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={transition[transitionType]}
      className="origin-bottom-left"
    >
      {children}
    </m.div>
  );
};

export default AnimatedItem;
