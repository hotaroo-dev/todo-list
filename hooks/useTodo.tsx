import { useCallback } from "react";
import useContract from "./useContract";

export interface ITodo {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
  isDeleted: boolean;
  createdAt: number;
}

const useTodo = () => {
  const contract = useContract();

  const getTodos = useCallback(async () => {
    if (!contract) return;

    try {
      const todos = await contract.getMyTodos();
      return todos;
    } catch (error) {
      // handle error
    }
  }, [contract]);

  const addTodo = useCallback(
    async (name: string, description: string) => {
      if (!contract) return;

      try {
        const date = new Date().getTime();
        const transaction = await contract.addTodo(
          name,
          description,
          Math.floor(date / 1000),
        );
        await transaction.wait();
      } catch (error) {
        // handle error
      }
    },
    [contract],
  );

  const deleteTodo = useCallback(
    async (id: number) => {
      if (!contract) return;

      try {
        const transaction = await contract.deleteTodo(id);
        await transaction.wait();
      } catch (error) {
        // handle error
      }
    },
    [contract],
  );

  const toggleCompleted = useCallback(
    async (id: number) => {
      if (!contract) return;

      try {
        const transaction = await contract.toggleCompleted(id);
        await transaction.wait();
      } catch (error) {
        // handle error
      }
    },
    [contract],
  );

  return { getTodos, addTodo, deleteTodo, toggleCompleted };
};

export default useTodo;
