import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({ data }) => {
    console.log(data);
    const { bookName, author, image, tags, rating, category, id } = data

    return (

        <Link to={`/book/${id}`}>
            <div className="mx-auto w-full">
                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <div className=" mx-auto">
                        <img className="h-[230px] w-[170px] " src={image} alt="Sunset in the mountains" />
                    </div>
                    <div className="px-6 py-4 text-left">
                        {tags.map((item, index) => <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold mr-2 text-[#23BE0A]">{item}</span>)}
                    </div>
                    <div className="px-6 py-4 text-left">
                        <div className="font-bold text-2xl mb-2 Playfair">{bookName}</div>
                        <p className="text-gray-700 text-base">
                            By : {author}
                        </p>
                        <div className="flex justify-between items-center  mt-10">
                            <p>{category}</p>
                            <p className=" flex items-center gap-2">{rating} <CiStar /></p>
                        </div>
                    </div>

                </div>
            </div>
        </Link>
    )
}

export default Book