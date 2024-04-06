"use client";

import { useSearchParams } from "next/navigation";
import TodoItemGrid from "./todoItemGrid";
import TodoItem from "./todoItem";
import { ITodo } from "@/app/_types/todo";

interface Props {
  todos: ITodo[];
}

const Todos: React.FC<Props> = ({ todos }) => {
  const searchParams = useSearchParams();
  const viewType = searchParams.get("viewType") ?? "grid";

  if (viewType === "list") {
    return (
      <ul className="space-y-4">
        {todos.map((todoItem) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} />
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {todos.map((todoItem) => (
        <TodoItemGrid key={todoItem.id} todoItem={todoItem} />
      ))}
    </ul>
  );
};

export default Todos;
