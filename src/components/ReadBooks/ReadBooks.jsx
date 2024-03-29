import { FaUserFriends } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { useEffect, useState } from "react";
import { getData } from "../../utils";
import { Link } from "react-router-dom";

const ReadBooks = () => {
    const [storData, setStorData] = useState([])
    useEffect(() => {
        const loculData = getData();
        setStorData(loculData);
    }, [])

    return (
        <>
            {
                storData.map((item, index) => (
                    <div key={index} className="card card-side flex flex-col lg:flex-row bg-base-100 border border-y-neutral-500 my-7">
                        <figure className="p-4  w-[260px] h-[300px] mx-auto lg:m-5 bg-slate-300 rounded-lg"><img src={item.image} alt="Movie" /></figure>
                        <div className="">
                            <h2 className=" font-bold text-3xl m-4 ">{item.bookName}</h2>
                            <p className=" text-base font-medium mb-4 ml-4 text-[#131313CC]">By : Awlad Hossain</p>
                            <div className="py-4  text-left font-bold text-base flex items-center gap-4 ml-4">
                                Tag: {item.tags.map((item, index) => <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1  font-semibold mr-2 text-[#23BE0A]">#{item}</span>)}
                                <div className="flex items-center gap-2 text-[#131313CC] font-normal text-base">
                                    <CiLocationOn className=" text-2xl" />
                                    <p >Year of Publishing: {item.yearOfPublishing}</p>
                                </div>
                            </div>
                            <div className="flex items-center flex-col lg:flex-row gap-5 m-4">
                                <div className="flex items-center gap-2 text-[#131313CC] font-normal text-base">
                                    <FaUserFriends className=" text-2xl" />
                                    <p>Publisher: {item.publisher}</p>
                                </div>
                                <div className="flex items-center gap-2 text-[#131313CC] font-normal text-base">
                                    <MdOutlineInsertPageBreak className=" text-2xl" />
                                    <p>Page {item.totalPages}</p>
                                </div>
                            </div>
                            <div className="flex gap-3 ml-4">
                                <span className="inline-block text-[#328EFF]  bg-sky-100 rounded-full py-3 px-5  text-sm font-semibold mr-2 bg-[#328EFF26]">Category: {item.category}</span>
                                <span className="inline-block text-[#FFAC33] bg-amber-100 rounded-full py-3 px-5  text-sm font-semibold mr-2 bg-[#FFAC3326]">Rating:{item.rating}</span>
                                <Link to={`/book/${item.id}`}>
                                    <button className="btn btn-secondary bg-[#23BE0A] border-none rounded-full">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default ReadBooks


