export const getTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("fail to get the todos");
  }
  const data = await res.json();
  return data;
};
export const getSingleTodo = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error("fail to get the todo");
  }
  const data = await res.json();
  return data;
};
