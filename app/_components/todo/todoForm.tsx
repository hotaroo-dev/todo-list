import BaseButton from "../common/baseButton";
import { IconClose } from "../icons/IconClose";

interface Props {
  closeDialog: () => void;
}

const TodoForm: React.FC<Props> = ({ closeDialog }) => {
  return (
    <div className="relative p-4">
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Todo</h1>
        <BaseButton radius="full" outlined={+true} onClick={closeDialog}>
          <IconClose className="text-2xl" />
        </BaseButton>
      </div>

      <form
        action=""
        className="space-y-4"
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="flex flex-col">
          <label>Name</label>
          <input className="h-10 rounded-md border bg-stone-100 px-4" />
        </div>
        <div className="flex flex-col">
          <label>Description</label>
          <textarea
            rows={4}
            className="rounded-md border bg-stone-100 px-4 py-2"
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
