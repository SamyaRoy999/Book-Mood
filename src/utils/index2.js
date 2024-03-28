import { toast } from 'react-toastify';
export const getWishData =()=>{
    let data = []
    const dataStore = localStorage.getItem('wish')
    if (dataStore) {
        data = JSON.parse(dataStore)
    }
    return data
}
export const wishData=(wish)=>{
    let data = getWishData()
    const isExist = data.find(d=> d.id === wish.id)
    if (isExist) {
        return toast.error("Alredy added wish list")
    }
    data.push(wish)
    localStorage.setItem('wish', JSON.stringify(data))
    toast.success("Book Added to Wish List")
}