import { Suspense } from "react"
import { Await, useAsyncError, useLoaderData, useNavigate } from "react-router-dom"
import TodoInfo from "../components/TodoInfo"

export default function SingleTodo() {
    const navigate = useNavigate()
    const { data } = useLoaderData()
    return (
        <>
            <button onClick={() => navigate(-1)}>back to todos</button>
            <Suspense fallback={<h1 className="text-4xl text-center text-purple-800">loading single todo info.........</h1>} >
                <Await resolve={data}
                    errorElement={<ReviewsError />}
                >
                    {(resolvedReviews) => <TodoInfo todo={resolvedReviews} />}
                </Await>

            </Suspense>
        </>
    )
}
function ReviewsError() {
    const error = useAsyncError();
    return <div>{error.message}</div>;
}