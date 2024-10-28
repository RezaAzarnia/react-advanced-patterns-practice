import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { clearName } from '../Redux/features/userSlice'
import Button from './Button'

const navbarData = [
    { id: 1, title: "home", url: "" },
    { id: 2, title: "books", url: "/books" },
    { id: 3, title: "add book", url: "/addBook" },
    { id: 4, title: "currency", url: "/currency" },
]
export default function Navbar() {
    const username = useSelector(state => state.user.userName)
    const dispatch = useDispatch()
    return (
        <ul className='flex items-center justify-center w-full gap-2 p-3 my-2 rounded-full shadow-2xl'>
            {
                navbarData.map(nav => {
                    return (
                        <li key={nav.id}>
                            <NavLink to={nav.url}
                                className={
                                    ({ isActive }) => `text-base capitalize px-2 py-1 rounded-2xl ${isActive ? "bg-black text-white" : ""}`
                                }
                            >
                                {nav.title}
                            </NavLink>
                        </li>

                    )
                })
            }
            <li>
                {
                    username ?
                        <Button
                            onClick={() => dispatch(clearName())}
                            className='px-2 py-1 text-base capitalize rounded-2xl'
                        >
                            logout

                        </Button>
                        :
                        <NavLink to={"login"}
                            className={
                                ({ isActive }) => `text-base capitalize px-2 py-1 rounded-2xl ${isActive ? "bg-black text-white" : ""}`
                            }
                        >
                            login
                        </NavLink>

                }
            </li>
        </ul>
    )
}
