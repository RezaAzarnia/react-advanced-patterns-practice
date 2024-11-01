import { Todo } from "../types";
type Props = {
  todo: Todo;
};
export default function TodoInfo({ todo }: Props) {
  return (
    <div className="max-w-5xl m-auto">
      <h1 className="text-2xl font-semibold">
        id:{todo?.id} - {todo?.title}
      </h1>
      <p>{todo?.body}</p>
    </div>
  );
}
