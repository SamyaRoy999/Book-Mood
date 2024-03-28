import { toast } from 'react-toastify';
export const getWishData =()=>{
    let data = []
    const dataStore = localStorage.getItem('book')
    if (dataStore) {
        data = JSON.parse(dataStore)
    }
    return data
}
export const wishData=(wish)=>{
    let data = getWishData()
    const isExist = data.find(d=> d.id === wish.id)
    if (isExist) {
        return toast.error("Wow so easy! dsafasd")
    }
    data.push(wish)
    localStorage.setItem('book', JSON.stringify(data))
    toast.success("Book Added to Wish List")
}