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
import { addBookAction } from "../pages/AddBooks";


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
        loader: () => getTodos()
      },
      {
        path: "singleTodo/:id",
        element: <SingleTodo />,
        loader: async ({ params }) => {
          const data = getSingleTodo(params.id)
          return defer({
            data
          })
        },
      },
      {
        path: '/addBook',
        element: <AddBooks />,
        action: addBookAction,
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
    ],
  },
  {
    path: "*",
    element: <h1>404 page is now this</h1>
  }
]);

export default router;
