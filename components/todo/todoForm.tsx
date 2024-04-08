"use client";

import { useEffect, useRef } from "react";
import useTodo, { ITodo } from "@/hooks/useTodo";
import BaseButton from "../common/baseButton";
import { IconClose } from "../icons/IconClose";

interface Props {
  closeDialog: () => void;
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoForm: React.FC<Props> = ({ closeDialog, setTodos }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { addTodo } = useTodo();

  const action = async (formData: FormData) => {
    const payload = Object.fromEntries(formData) as {
      name: string;
      description: string;
    };

    await addTodo(payload.name, payload.description);
    formRef.current?.reset();

    // handling ui in frontend
    setTodos((todos) => [
      ...todos,
      {
        id: todos?.length,
        ...payload,
        isCompleted: false,
        isDeleted: false,
        createdAt: new Date().getTime() / 1000,
      },
    ]);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="relative p-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Todo</h1>
        <BaseButton radius="full" outlined={+true} onClick={closeDialog}>
          <IconClose className="text-2xl" />
        </BaseButton>
      </div>

      <form ref={formRef} action={action} className="space-y-4">
        <div className="flex flex-col">
          <label>Name</label>
          <input
            required
            ref={inputRef}
            name="name"
            type="text"
            className="h-10 rounded-md px-4"
          />
        </div>
        <div className="flex flex-col">
          <label>Description</label>
          <textarea
            rows={4}
            required
            name="description"
            className="rounded-md px-4 py-2"
          />
        </div>
        <div className="text-end">
          <BaseButton
            type="submit"
            className="bg-jade-400 px-4 text-jade-950 hover:bg-jade-500"
          >
            Add Todo
          </BaseButton>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
