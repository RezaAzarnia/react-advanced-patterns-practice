import { Link, useLoaderData } from 'react-router-dom'

export default function Todos() {
    const todos = useLoaderData()
    return (
        <>
            {
                todos?.map(item => {
                    return (
                        <p key={item.id}>
                            <Link to={`singleTodo/${item.id}`} >{item.title}</Link>
                        </p>
                    )
                })
            }
        </>
    )
}
