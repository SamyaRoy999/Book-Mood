import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home/Home';
import Root from './Layout/Root';
import ListedBooks from './pages/ListedBooks/ListedBooks';
import Read from './pages/ReadPage/Read';
import SingleBook from './pages/singleBook/SingleBook';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/listedBooks",
        element: <ListedBooks/>
      },
      {
        path: "/read",
        element: <Read/>
      },
      {
        path: "/book/:id",
        element: <SingleBook/>,
        loader: () => fetch('/data.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
