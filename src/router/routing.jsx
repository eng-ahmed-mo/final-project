import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Layout from "../Layout/Layout";
import Error from "../pages/Error/Error";
import Shop from "../pages/shop/Shop";
import SingleShop from "../pages/singleShop/SingleShop";
import ShopCart from "../pages/shopCart/ShopCart";
import Wishlist from "../pages/Wishlist/Wishlist";
import CheckOut from "../pages/checkOut/CheckOut";
import Search from "../pages/search/Search";
import LogIn from "../pages/login/LogIn";
import Register from "../pages/register/Register";


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "*",
                element: <Error />,
            },
            {
                path: "login",
                element: <LogIn />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "shop",
                element: <Shop />,
            },
            {
                path: "/:id/:name",
                element: <SingleShop />,
            },
            {
                path: "/shopCart",
                element: <ShopCart />,
            },
            {
                path: "/wishlist",
                element: <Wishlist />,
            },
            {
                path: "checkout",
                element: <CheckOut />,
            },
            {
                path: "/search",
                element: <Search />,
            }
        ],
    },
])

