import { createBrowserRouter } from "react-router-dom";
import AddBike from "../../Pages/AddBike/AddBike";
import Blog from "../../Pages/Blog/Blog";
import CategoryId from "../../Pages/Category/CategoryId";
import Admin from "../../Pages/Dashboard/Admin/Admin";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import Buyers from "../../Pages/Dashboard/Buyers/Buyers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import Seller from "../../Pages/Dashboard/Seller/Seller";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Dashboard from "../../Pages/Layout/Dashboard";
import Main from "../../Pages/Layout/Main";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivetRoute/PrivetRoute";


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
                loader: ({ params }) => fetch(`https://bike-server-seven.vercel.app/categoryItem/${params.id}`)
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
           {
                path: '/dashboard/allUser',
                element:<AllUser></AllUser>,
                loader: () => fetch('https://bike-server-seven.vercel.app/user')
           },
           {
               path:'/dashboard/buyers',
               element:<Buyers></Buyers>,
                loader: () => fetch('https://bike-server-seven.vercel.app/user/buyer')
           },
            {
                path: '/dashboard/seller',
                element: <Seller></Seller>,
                loader: () => fetch('https://bike-server-seven.vercel.app/user/seller')
            },
           {
               path:'/dashboard/admin',
               element:<Admin></Admin>,
               loader: () => fetch('https://bike-server-seven.vercel.app/user/admin')
              
           },
        {
            path:'/dashboard/orders',
            element:<MyOrders></MyOrders>
        },
        {
            path:'/dashboard/addProduct',
            element:<AddBike></AddBike>
        },
        {
            path:'/dashboard/myProduct',
            element:<MyProduct></MyProduct>
        }
           
           
        ]
    },
    {
        path:'*',
        element:<ErrorPage></ErrorPage>
    }
])