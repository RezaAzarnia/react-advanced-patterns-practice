import { Link } from "react-router-dom";
import { Todo } from "../types";

type Props = {
  todos: Todo[];
};

export default function Todos({ todos }: Props) {
  return (
    <>
      {todos?.map((item: Todo) => {
        return (
          <p key={item.id}>
            <Link to={`singleTodo/${item.id}`}>{item.title}</Link>
          </p>
        );
      })}
    </>
  );
}
