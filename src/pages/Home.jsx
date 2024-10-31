import { Suspense } from 'react'
import { Await, useLoaderData } from "react-router-dom"
import Todos from "../components/Todos"

export default function Home() {
  const { todos } = useLoaderData()
  return (
    <div>
      <Suspense fallback={<h1 className='text-4xl text-center'>loading data..................</h1>}>
        <Await resolve={todos}>
          {(values) => <Todos todos={values} />}
        </Await>
      </Suspense>
    </div>
  )
}
