"use client";

import { useState } from "react";
import { IconAdd } from "../icons/IconAdd";
import AnimatedItem from "../common/animatedItem";
import TodoForm from "./todoForm";
import { AnimatePresence, motion as m } from "framer-motion";
import BaseButton from "../common/baseButton";

const TodoDialog: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false);
  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
      <BaseButton
        radius="full"
        outlined={+true}
        onClick={() => setShowDialog((prev) => !prev)}
      >
        <IconAdd className="text-xl" />
      </BaseButton>
      <AnimatePresence>
        {showDialog && (
          <m.div
            className="fixed inset-y-0 right-0 z-20 w-full max-w-md bg-white shadow-md"
            variants={slideIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <AnimatedItem animation="opacity">
              <TodoForm closeDialog={closeDialog} />
            </AnimatedItem>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};

const slideIn = {
  hidden: { x: "100%", opacity: 0.95 },
  visible: { x: 0, opacity: 1 },
};

export default TodoDialog;
