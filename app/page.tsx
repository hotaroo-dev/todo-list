"use client";

import { useEffect, useState } from "react";
import useTodo, { ITodo } from "@/hooks/useTodo";
import TodoDialog from "@/components/todo/todoDialog";
import SearchTodos from "@/components/todo/searchTodos";
import TodoViewType from "@/components/todo/todoViewType";
import Todos from "@/components/todo/todos";

export default function Home() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const { getTodos } = useTodo();

  useEffect(() => {
    (async () => {
      const todos = await getTodos();
      setTodos(todos);
    })();
  }, [getTodos]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <SearchTodos />
        <TodoDialog setTodos={setTodos} />
        <TodoViewType />
      </div>
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}
