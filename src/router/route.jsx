import { createBrowserRouter, defer } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "../components/Loader";
import Error from "../components/Error";

const Layout = lazy(() => import("../components/Layout"));
const Books = lazy(() => import("../pages/Books"));
const Currency = lazy(() => import("../pages/Currency"));
const AddBooks = lazy(() => import("../pages/AddBooks"));
const Login = lazy(() => import("../components/Login"));
const Home = lazy(() => import("../pages/Home"));
const SingleTodo = lazy(() => import("../pages/SingleTodo"));

import { getSingleTodo, getTodos } from "../services/todos";
import CountPage from "../pages/CountPage";


const router = createBrowserRouter([
  {
    path: "",
    element: <Suspense fallback={<Loader />}>
      <Layout />
    </Suspense>,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          const todos = getTodos()
          return defer({
            todos
          })
        }
      },
      {
        path: "singleTodo/:id",
        element: <SingleTodo />,
        loader: async ({ params }) => {
          const todo = getSingleTodo(params.id)
          return defer({
            todo
          })
        },
      },
      {
        path: '/addBook',
        element: <AddBooks />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: '/currency',
        element: <Currency />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: "/count",
        element: <CountPage />
      }


    ],
  },
  {
    path: "*",
    element: <h1>404 page is now this</h1>
  }
]);

export default router;
