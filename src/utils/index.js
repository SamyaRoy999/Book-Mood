import { toast } from 'react-toastify';
export const getData =()=>{
    let data = []
    const dataStore = localStorage.getItem('book')
    if (dataStore) {
        data = JSON.parse(dataStore)
    }
    return data
}
export const saveData=(book)=>{
    let data = getData()
    const isExist = data.find(d=> d.id === book.id)
    if (isExist) {
        return toast.error("Wow so easy! dsafasd")
    }
    data.push(book)
    localStorage.setItem('book', JSON.stringify(data))
    toast.success("Book Added to Read List")
}