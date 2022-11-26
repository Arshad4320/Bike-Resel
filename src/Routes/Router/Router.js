import { createBrowserRouter } from "react-router-dom";
import AddBike from "../../Pages/AddBike/AddBike";
import Blog from "../../Pages/Blog/Blog";
import CategoryId from "../../Pages/Category/CategoryId";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Pages/Layout/Main";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path:'/addBike',
                element:<AddBike></AddBike>
            },
           
            {
                path:'/categoryItem/:id',
                element:<CategoryId></CategoryId>,
                loader: ({ params }) => fetch(`http://localhost:5000/categoryItem/${params.id}`)
            }
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])