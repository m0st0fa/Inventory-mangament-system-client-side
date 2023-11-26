import { FaCartPlus, FaHome, FaShopify, FaTable, FaUtensils, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { FaCcAmazonPay } from "react-icons/fa";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { GrLogout } from "react-icons/gr";
import { FaRegPlusSquare } from "react-icons/fa";




const DashBoard = () => {
    // TODO: GET THE ADMIN VALUE FROM THE DATABASE 
    const isAdmin = true
    return (
        <div className="md:flex ">
            {/* dashboard side bar */}
            <div className=" min-h-screen text-black bg-orange-400">
                <ul className="menu p-4 ">
                    {
                        isAdmin ?
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
                                    <NavLink to="/dashboard/home">
                                        <FaHome />
                                        Manger Home
                                    </NavLink>
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
                                        Product section Table
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/totalProduct">
                                        <BsMenuButtonWideFill />
                                        Total Product
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <BsMenuButtonWideFill />
                                        Cart
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/sale">
                                        <FaCartPlus />
                                        sale Summary
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/logout">
                                        <GrLogout />
                                        LogOut
                                    </NavLink>
                                </li>
                            </>
                            :
                            <></>


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