import { useEffect, useState, } from "react"
import Book from "./Book/Book"


const Books = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('/data/data.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div className=" ">
            <h2 className=" font-bold text-4xl lg:mt-20 mt-10 text-center lg:mb-10 mb-5">Books</h2>
            <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {books.map(item =>  <Book key={item.id} data={item}/>)} 
            </div>
        </div>
    )
}

export default Books