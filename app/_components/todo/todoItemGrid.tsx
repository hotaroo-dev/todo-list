"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ITodo } from "@/app/_types/todo";
import { formatDate } from "@/app/_utils/formatDate";
import { generateColors } from "@/app/_utils/generateColors";
import BaseButton from "../common/baseButton";
import AnimatedItem from "../common/animatedItem";
import { IconEllipsis } from "../icons/IconEllipsis";

interface Props {
  todoItem: ITodo;
}

const TodoItemGrid: React.FC<Props> = ({ todoItem }) => {
  const [showMenu, setShowMenu] = useState(false);
  const colors = useMemo(generateColors, [todoItem]);
  const toggleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="rounded-xl border bg-stone-100 p-4 duration-300 hover:border-[#6b7280]">
      <div className="flex items-center justify-between">
        <h1
          className="rounded-full border px-4 py-0.5"
          style={{ ...colors }}
          suppressHydrationWarning
        >
          {todoItem.name}
        </h1>

        <div className="relative">
          <BaseButton
            className="aspect-square h-8 duration-300 hover:bg-stone-200"
            onClick={toggleShowMenu}
          >
            <IconEllipsis className="text-xl text-stone-400" />
          </BaseButton>
          <AnimatePresence>
            {showMenu && (
              <AnimatedItem
                animation="scale"
                transitionType="tween"
                className="absolute left-0 top-10 z-10 origin-top-left"
              >
                <ul className="w-[15ch] rounded-md border bg-white py-2 shadow-sm">
                  <li className="duration-300 hover:bg-slate-200/40">
                    <button className="px-4 py-1">Edit</button>
                  </li>
                  <li className="duration-300 hover:bg-slate-200/40">
                    <button className="px-4 py-1">Delete</button>
                  </li>
                </ul>
              </AnimatedItem>
            )}
          </AnimatePresence>
        </div>
      </div>

      <p className="py-4">{todoItem.description}</p>

      <div className="flex items-center justify-between">
        <time className="text-sm text-gray-400" suppressHydrationWarning>
          {formatDate(todoItem.createdAt)}
        </time>
        <input type="checkbox" defaultChecked={todoItem.isCompleted} />
      </div>
    </div>
  );
};

export default TodoItemGrid;
