import { FaCartPlus, FaHome, FaShopify, FaShoppingCart, FaTable, FaUser, FaUtensils, } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
import { FaCcAmazonPay } from "react-icons/fa";
import { GrLogout } from "react-icons/gr";
import { FaRegPlusSquare } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import useCart from "../../Hooks/useCart";




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
                                    <NavLink to="/dashboard/adminHome">
                                        <FaShopify />
                                        shop logo
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/menus">
                                        <FaUtensils />
                                        Manger Menus
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addProduct">
                                        <FaRegPlusSquare />
                                        Add Product
                                    </NavLink>
                                </li>
                                <li>
                                    <Link to="/">
                                        <FaHome />
                                        Home
                                    </Link>
                                </li>
                                <li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart />
                                        My cart({cart.length})
                                    </NavLink>
                                </li>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/payment">
                                        <FaCcAmazonPay />
                                        Payment
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/productSection">
                                        <FaTable />
                                        Product Collection
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/sale">
                                        <FaCartPlus />
                                        sale Summary
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
                            <li>
                                <NavLink to="/">
                                    <GrLogout />
                                    LogOut
                                </NavLink>
                            </li>

                        </>
                    }
                </ul>
            </div>
            {/* dashboard content  */}
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;