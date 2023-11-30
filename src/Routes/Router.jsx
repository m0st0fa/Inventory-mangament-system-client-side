import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorElement from "../Components/ErrorElement";
import CreateShop from "../Pages/Home/CreateShop/CreateShop";
import PrivateRoutes from "./PrivateRoutes";
import DashBoard from "../Pages/DashBoard/DashBoard";
import AddProduct from "../Pages/DashBoard/AddProduct/AddProduct";
import ProductSection from "../Pages/DashBoard/ProductSection/ProductSection";
import UpdateProduct from "../Pages/DashBoard/UpdateProduct";
import AllUser from "../Pages/DashBoard/AllUser";
import Popular from "../Pages/Home/Popular/Popular";
import AllShopInfo from "../Pages/DashBoard/AllShopInfo";
import Cart from "../Pages/DashBoard/Cart/Cart";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentHistory from "../Pages/DashBoard/Payment/PaymentHistory";
import PricingCard from "../Pages/Home/PricingCard";
import ShopLogo from "../Pages/DashBoard/ShopLogo";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/createShop',
                element: <PrivateRoutes> <CreateShop></CreateShop></PrivateRoutes>
            },
            {
                path: '/popular',
                element: <Popular></Popular>
            },
            {
                path: 'PricingCard',
                element: <PricingCard></PricingCard>
            }
        ]
    },
    // Shop Manager DashBoard
    {
        path: 'dashboard',
        errorElement: <ErrorElement></ErrorElement>,
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: 'addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: 'productSection',
                element: <ProductSection></ProductSection>
            },
            {
                path: 'updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`http://localhost:5001/addProduct/${params.id}`)
            },
            {
                path: 'allUser',
                element: <AllUser></AllUser>
            },
            {
                path: 'shopLogo',
                element: <ShopLogo></ShopLogo>
            },
            {
                path: 'allShop',
                element: <AllShopInfo></AllShopInfo>

            },
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>

            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },

        ]
    },
]);
export default router