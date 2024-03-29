import { Link } from 'react-router-dom'
import  '../../App.css'

const Banner = () => {
    return (
        <section className="text-gray-600 body-font rounded-lg bg-[#00000020] bg-white dark:bg-slate-900">
            <div className="container mx-auto flex md:px-24 md:py-10   md:flex-row flex-col items-center">
                <div
                    className="lg:flex-grow mt-5 md:mt-0   md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1
                        className="text-2xl font-extrabold leading-9 Playfair tracking-tight mb-3 text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
                       Books to freshen up your bookshe
                    </h1>
                   
                    <div className="flex justify-center">
                        <Link to='/listedBooks' href="#"
                            className="inline-flex text-white bg-[#23BE0A] border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">
                            View The List
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full mb-5 md:mb-0 md:w-1/2 w-3/6">
                    <img className="object-cover object-center rounded" alt="hero" src="https://i.postimg.cc/L5wDm8gh/book1-1.png"/>
                </div>
            </div>
        </section>
    )
}

export default Banner