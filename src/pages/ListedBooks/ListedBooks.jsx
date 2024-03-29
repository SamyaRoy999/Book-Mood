import { useState } from "react"
import { Link, Outlet } from "react-router-dom"

const ListedBooks = () => {
    const [active, setActive] = useState(0)
    
    return (
        <>
            <div className=" text-center bg-[#1313130D] mb-8 rounded-lg p-8 ">
                <h1 className=" text-2xl font-bold">Books </h1>
            </div>

            <div className="dropdown flex justify-center   mx-auto mt-6 mb-14">
                <div className="">
                    <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A]">Click</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>

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