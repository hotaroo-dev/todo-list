"use client";

import { useSearchParams } from "next/navigation";
import { ITodo } from "@/hooks/useTodo";
import TodoItemGrid from "./todoItemGrid";
import TodoItem from "./todoItem";

interface Props {
  todos: ITodo[] | undefined;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const Todos: React.FC<Props> = ({ todos, setTodos }) => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") ?? "";
  const viewType = searchParams.get("viewType") ?? "grid";

  const filteredTodo = todos?.filter((todoItem) =>
    todoItem.name.includes(searchTerm),
  );

  if (viewType === "list") {
    return (
      <ul className="space-y-4">
        {filteredTodo?.map((todoItem) => (
          <TodoItem key={todoItem.id} todoItem={todoItem} setTodos={setTodos} />
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredTodo?.map((todoItem) => (
        <TodoItemGrid
          key={todoItem.id}
          todoItem={todoItem}
          setTodos={setTodos}
        />
      ))}
    </ul>
  );
};

export default Todos;
