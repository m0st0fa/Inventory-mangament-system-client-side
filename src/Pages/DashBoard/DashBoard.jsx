import { FaCartPlus, FaShopify, FaShoppingCart, FaTable, FaUser, } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaCcAmazonPay } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { FaRegPlusSquare } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import useCart from "../../Hooks/useCart";
import Footer from "../Shared/Footer";




const DashBoard = () => {
    const { logout } = useAuth()
    const [cart] = useCart()

    const handleSingOut = () => {
        logout()
            .then()
            .catch(error => {
                console.log(error)
            })
    }
    // TODO: GET THE Manger
    const isManger = true;
    const [isAdmin] = useAdmin()
    return (
        <div className="md:flex ">
            {/* dashboard side bar */}
            <div className=" min-h-screen text-black bg-blue-400">
                <ul className="menu p-4 ">
                    {/*----------------------------- this is isManger part --------------------------*/}
                    {
                        isManger && (
                            <>
                                <li>
                                    <NavLink to="/dashboard/shopLogo">
                                        <FaShopify />
                                        shop logo
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addProduct">
                                        <FaRegPlusSquare />
                                        Products Section Part :Add Product
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/productSection">
                                        <FaTable />
                                        Product Collection
                                    </NavLink>
                                </li>

                                <li>
                                    <li>
                                        <Link to="/dashboard/cart">
                                            <FaShoppingCart />
                                            Product to Cart({cart.length})
                                        </Link>
                                    </li>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/payment">
                                        <FaCcAmazonPay />
                                        CheckOut Payment
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/paymentHistory">
                                        <FaCartPlus />
                                        sale Summary
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/PricingCard">
                                        <FaCartPlus />
                                        Subscription & Payment
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink onClick={handleSingOut} to='/login'>
                                        <GrLogout />
                                        LogOut
                                    </NavLink>
                                </li>

                            </>
                        )}
                    {/* -----------------------this is Admin PART------------------------- */}
                    <div className=" divider
                    "></div>
                    {
                        isAdmin &&
                        <>
                            <li>
                                <NavLink to="/dashboard/allShop">
                                    <GrLogout />
                                    all shop Information
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUser">
                                    <FaUser />
                                    all User Information
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/sellSummary">
                                    <FaUser />
                                    Admin Sell Summary
                                </NavLink>
                            </li>
                        </>
                    }
                </ul>
            </div>
            {/* dashboard content  */}
            <div className="flex-1 p-10">
                <Outlet></Outlet>
                <div className="md:mt-60">
                    <Footer></Footer>
                </div>

            </div>
        </div>
    );
};

export default DashBoard;