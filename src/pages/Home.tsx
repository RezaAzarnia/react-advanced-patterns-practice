import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Todos from "../components/Todos";
import { Todo } from "../types";

export default function Home() {
  const { todos } = useLoaderData() as { todos: Todo[] };
  return (
    <div>
      <Suspense
        fallback={
          <h1 className="text-4xl text-center">
            loading data..................
          </h1>
        }
      >
        <Await resolve={todos}>{(values) => <Todos todos={values} />}</Await>
      </Suspense>
    </div>
  );
}
