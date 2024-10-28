import { lazy } from "react"
import { Suspense } from 'react'
const Todos = lazy(() => import("../components/Todos"))

export default function Home() {
  return (
    <div>
      <Suspense fallback={<h1 className='text-4xl text-center'>loading data..................</h1>}>
        <Todos />
      </Suspense>
    </div>
  )
}
