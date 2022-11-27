import { createBrowserRouter } from "react-router-dom";
import AddBike from "../../Pages/AddBike/AddBike";
import Blog from "../../Pages/Blog/Blog";
import CategoryId from "../../Pages/Category/CategoryId";
import Admin from "../../Pages/Dashboard/Admin/Admin";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import Buyers from "../../Pages/Dashboard/Buyers/Buyers";
import Seller from "../../Pages/Dashboard/Seller/Seller";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Dashboard from "../../Pages/Layout/Dashboard";
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
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
           {
                path: '/dashboard/allUser',
                element:<AllUser></AllUser>,
                loader: () => fetch('http://localhost:5000/user')
           },
           {
               path:'/dashboard/buyers',
               element:<Buyers></Buyers>
           },
            {
                path: '/dashboard/seller',
                element: <Seller></Seller>
            },
           {
               path:'/dashboard/admin',
               element:<Admin></Admin>
           }
           
           
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])