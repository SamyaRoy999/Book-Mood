import { useLoaderData } from "react-router-dom"


const SingleBook = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div>SingleBook</div>
    )
}

export default SingleBook