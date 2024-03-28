import { getWishData } from "../../utils/index2"


const Wishlist = () => {
    const data = getWishData()
    console.log(data);
    return (
        <div>i ma a  Wishlist</div>
    )
}

export default Wishlist