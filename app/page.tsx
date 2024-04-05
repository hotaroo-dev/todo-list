import TodoDialog from "./_components/todo/todoDialog";
import SearchTodos from "./_components/todo/searchTodos";
import TodoViewType from "./_components/todo/todoViewType";
import Todos from "./_components/todo/todos";

export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-6">
        <SearchTodos />
        <TodoDialog />
        <TodoViewType />
      </div>
      <Todos
        todos={Array.from({ length: 5 }, (_, i) => ({
          id: i.toString(),
          name: `todo ${i}`,
          description: `description ${i}`,
          isCompleted: false,
          createdAt: new Date(),
        }))}
      />
    </div>
  );
}
