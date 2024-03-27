import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

const ListedBooks = () => {
    const [active, setActive] = useState(0)
    return (
        <>
        <div className="flex items-center  -mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap dark:bg-gray-100 dark:text-gray-800">
            <Link to='' onClick={() => setActive(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${active === 0 ? 'border border-b-0 ' : 'border-b'} rounded-t-lg dark:border-gray-600 dark:text-gray-600`}>
                <span>Read Books</span>
            </Link>
            <Link to='wishlist' onClick={() => setActive(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3   space-x-2 ${active === 1 ? 'border border-b-0' : 'border-b'}  rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
                <span>Wishlist Books</span>
            </Link>
        </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default ListedBooks