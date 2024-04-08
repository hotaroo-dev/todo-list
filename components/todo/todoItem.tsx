"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { formatDate } from "@/libs/formatDate";
import { generateColors } from "@/libs/generateColors";
import BaseButton from "../common/baseButton";
import AnimatedItem from "../common/animatedItem";
import { IconEllipsis } from "../icons/IconEllipsis";
import useTodo, { ITodo } from "@/hooks/useTodo";

interface Props {
  todoItem: ITodo;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoItem: React.FC<Props> = ({ todoItem }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { toggleCompleted, deleteTodo } = useTodo();
  const colors = useMemo(generateColors, [todoItem]);
  const createdAt = formatDate(todoItem.createdAt);

  const handleChange = async () => {
    await toggleCompleted(todoItem.id);
  };

  const handleDelete = async () => {
    await deleteTodo(todoItem.id);
  };

  const toggleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-10 rounded-xl border bg-stone-100 p-4 duration-300 hover:border-[#6b7280]">
      <div className="flex-1">
        <h1
          className="inline-block rounded-full border px-4 py-0.5"
          style={{ ...colors }}
          suppressHydrationWarning
        >
          {todoItem.name}
        </h1>
      </div>

      <div className="flex-1 basis-1/2 leading-tight">
        <p>{todoItem.description}</p>
        <time className="text-sm text-gray-400" suppressHydrationWarning>
          {createdAt}
        </time>
      </div>

      <div className="relative flex items-center gap-2.5">
        <input
          type="checkbox"
          name="isCompleted"
          defaultChecked={todoItem.isCompleted}
          onChange={handleChange}
        />
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
              className="absolute right-0 top-10 z-10 origin-top-right"
            >
              <ul className="w-[15ch] rounded-md border bg-white py-2 shadow-sm">
                <li className="duration-300 hover:bg-slate-200/40">
                  <button className="px-4 py-1">Edit</button>
                </li>
                <li className="duration-300 hover:bg-slate-200/40">
                  <button className="px-4 py-1" onClick={handleDelete}>
                    Delete
                  </button>
                </li>
              </ul>
            </AnimatedItem>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TodoItem;
