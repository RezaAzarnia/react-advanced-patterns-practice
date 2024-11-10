import { Todo } from "../types";

export default function ModalInfo({
  onClose,
  todo,
}: {
  onClose?: () => void;
  todo: Todo;
}) {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">{todo?.title}</h1>
      <p>{todo?.body}</p>
      <div>
        <button
          onClick={onClose}
          className="px-4 py-2 text-white capitalize transition-colors bg-red-500 rounded-md outline-none hover:bg-red-600"
        >
          close me
        </button>
      </div>
    </div>
  );
}
