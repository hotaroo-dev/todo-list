"use client";

import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { formatDate } from "@/libs/formatDate";
import useTodo, { ITodo } from "@/hooks/useTodo";
import BaseButton from "../common/baseButton";
import AnimatedItem from "../common/animatedItem";
import { IconEllipsis } from "../icons/IconEllipsis";
import { IconEdit } from "../icons/IconEdit";

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
  todoItem: ITodo;
  todoColor: {
    color: string;
    background: string;
    borderColor: string;
  };
}

const TodoItemGrid: React.FC<Props> = ({ todoItem, todoColor, setTodos }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [editable, setEditable] = useState(false);
  const { toggleCompleted, editTodoDescription, deleteTodo } = useTodo();
  const descRef = useRef<HTMLParagraphElement>(null);
  const createdAt = formatDate(todoItem.createdAt);

  const toggleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleEdit = () => {
    setEditable(true);
    setShowMenu(false);
  };

  const editDescription = async () => {
    await editTodoDescription(todoItem.id, descRef.current?.textContent ?? "");
    setEditable(false);
  };

  const handleChange = async () => {
    await toggleCompleted(todoItem.id);
  };

  const handleDelete = async () => {
    await deleteTodo(todoItem.id);

    // handling ui
    setTodos((todos) => todos.filter((item) => item.id !== todoItem.id));
    setShowMenu(false);
  };

  return (
    <div className="rounded-xl border bg-stone-100 p-4 duration-300 hover:border-[#6b7280]">
      <div className="flex items-center justify-between">
        <h1
          className="rounded-full border px-4 py-0.5"
          style={{ ...todoColor }}
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
                    <button className="px-4 py-1" onClick={handleEdit}>
                      Edit
                    </button>
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

      <p
        ref={descRef}
        contentEditable={editable}
        suppressContentEditableWarning={true}
        className="py-4"
      >
        {todoItem.description}
      </p>

      <div className="flex items-center justify-between">
        <time className="text-sm text-gray-400" suppressHydrationWarning>
          {createdAt}
        </time>

        <div className="flex items-center gap-3">
          {editable && (
            <button
              className="translate-y-0.5 text-gray-600 flex-center"
              onClick={editDescription}
            >
              <IconEdit />
            </button>
          )}
          <input
            type="checkbox"
            defaultChecked={todoItem.isCompleted}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItemGrid;
