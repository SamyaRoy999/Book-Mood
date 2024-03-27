import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveData } from "../../utils";

const SingleBook = () => {
    const [toasti, setToasti] = useState(true)
    const data = useLoaderData()
    const { id } = useParams()
    const book = data.find(item => item.id == id)

    const { bookName, author, image, tags, rating, category, totalPages, review, publisher, yearOfPublishing, } = book;
    
    const hendelRead=(book)=>{
        
        if (toasti) {
            saveData(book)
            setToasti(false)
        }else{
            toast.error("Wow so easy!")
        }
        
    }
    const hendelish=(book)=>{
        if (toasti) {
            console.log(book);
            toast.success("Wow so easy!")
        }else{
            toast.error("Wow so easy!")
        }

    }
    
    
    return (
        <div className="bg-gray-100 dark:bg-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className=" rounded-lg min-h-[550px]  bg-gray-300 flex justify-center items-center dark:bg-gray-700 mb-4">
                            <img className="text-center min-h-[400px] object-cover" src={image} alt="Book Image" />
                        </div>

                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-2 Playfair">{bookName}</h2>
                        <p className="text-[#131313CC] font-medium text-xl py-5">By : {author}</p>
                        <hr />
                        <p className=" font-medium text-xl py-3">{category}</p>
                        <hr />
                        <div>
                            <p className="text-[#131313B3] py-6 dark:text-gray-300 text-sm mt-2"><span className="font-bold text-gray-700 dark:text-gray-300">Review : </span>
                                {review}
                            </p>
                        </div>
                        <div className="flex items-center">
                            <p className=" font-bold text-base">Tag :</p>
                            <div className="px-6 py-4 text-left">
                                {tags.map((item, index) => <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 text-[#23BE0A]"> {item}</span>)}
                            </div>
                        </div>
                        <hr />
                        <table >
                            <tbody className="">
                                <tr className="">
                                    <td className="pr-12 text-base font-normal text-[#131313B3]"> Number of Pages:</td>
                                    <td className=" font-bold text-base"> {totalPages}</td>
                                </tr>
                                <tr>
                                    <td className="pr-12 text-base font-normal text-[#131313B3]">Publisher:</td>
                                    <td className=" font-bold text-base">{publisher}</td>
                                </tr>
                                <tr>
                                    <td className="pr-12 text-base font-normal text-[#131313B3]">Year of Publishing:</td>
                                    <td className=" font-bold text-base">{yearOfPublishing}</td>
                                </tr>
                                <tr>
                                    <td className="pr-12 text-base font-normal text-[#131313B3]">Rating:</td>
                                    <td className=" font-bold text-base">{rating}</td>
                                </tr>
                                <div>
                                    <button  className="btn btn-outline mr-4 mt-6 btn-info" onClick={()=> hendelRead( book)}>Read </button>
                                    <button  className="btn bg-[#59C6D2]" onClick={()=> hendelish( book)}>Wishlist</button>
                                    <ToastContainer />
                                </div>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingleBook