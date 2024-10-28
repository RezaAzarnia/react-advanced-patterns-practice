import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
export default function Layout() {
    return (
        <>
            <div className='max-w-screen-xl p-8 m-auto'>
                <Navbar />
                <div className="my-12">
                    <Outlet />
                </div>
            </div>
        </>
    )
}
