import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import '../App.css'

const Root = () => {
    return (
        <div className="mx-auto container WorkSans">
            <Navbar/>
            <Outlet/>
        </div>
    )
}

export default Root