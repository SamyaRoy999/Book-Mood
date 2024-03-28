import { useLoaderData } from "react-router-dom"
import Book from "../../components/Books/Book/Book"


const Recommend = () => {
    const retingData = useLoaderData()
    const rating = retingData.filter(item => item.rating > 4.7)


    return (
        <>
            <div className=" text-center bg-[#1313130D] mb-8 rounded-lg p-8 ">
                <h1 className=" text-2xl font-bold">Must-Rating Book Lists</h1>
            </div>
            <div className="grid mt-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {rating.map(item => <Book key={item.id} data={item} />)}
            </div>
        </>

    )
}

export default Recommend