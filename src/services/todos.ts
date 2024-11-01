import { Todo } from "../types";

export const getTodos = async (): Promise<Todo[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("fail to get the todos");
  }
  const data = await res.json();
  return data;
};
export const getSingleTodo = async (id: number): Promise<Todo> => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("fail to get the todo");
  }
  const data = await res.json();
  return data;
};
