import { createBrowserRouter } from "react-router-dom";

import Home from '../pages/Home/Home';
import Root from '../Layout/Root';
import ListedBooks from '../pages/ListedBooks/ListedBooks';
import Read from '../pages/ReadPage/Read';
import SingleBook from '../pages/singleBook/SingleBook';
import Error from '../pages/error/Error';
import ReadBooks from "../components/ReadBooks/ReadBooks";
import Wishlist from "../components/WishList/Wishlist";
import Recommend from "../pages/Recommend/Recommend";
import About from "../pages/AboutUS/About";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/listedBooks",
                element: <ListedBooks />,
                children: [
                    {
                        index: true,
                        element: <ReadBooks/>
                    },
                    {
                        path: "wishlist",
                        element: <Wishlist/>
                    },
                ]
            },
            {
                path: "/read",
                element: <Read />
            },
            {
                path: "/book/:id",
                element: <SingleBook />,
                loader: () => fetch("/data/data.json")
            },
            {
                path: "/Recommend",
                element: <Recommend />,
                loader: () => fetch("/data/data.json")
            },
            {
                path: "/about",
                element: <About/>, 
            }
        ]
    },
]);