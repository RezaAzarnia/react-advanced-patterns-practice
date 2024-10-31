import { Link } from 'react-router-dom'

export default function Todos({ todos }) {
    return (
        <>
            {
                todos?.map(item => {
                    return (
                        <p key={item.id}>
                            <Link to={`singleTodo/${item.id}`}>{item.title}</Link>
                        </p>
                    )
                })
            }
        </>
    )
}
