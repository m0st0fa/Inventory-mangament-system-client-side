/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Navigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const PopluarDetails = ({ item }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();


    const { authorName, imageURL, price, bookTitle, bookDescription,_id } = item;
    const handleAddToCart = food => {
        if (user && user.email) {
            // then the cart item we sent the database
            console.log(user.email, food)
            const cartItem = {
                menuId: _id,
                email: user.email,
                authorName,
                imageURL,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.onmouseenter = Swal.stopTimer;
                                toast.onmouseleave = Swal.resumeTimer;
                            }
                        });
                        Toast.fire({
                            icon: "success",
                            title: `${name}item added successfully`
                        });

                    }
                })

        } else {
            Swal.fire({
                title: "You are not Logged in now",
                text: "please Login first",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    Navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className="w-full h-96 " src={imageURL} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    <span className=" text-lime-700 font-medium">Author</span>:{authorName}
                    <div className="badge badge-secondary p-4">{bookTitle}</div>
                </h2>
                <p> <small> {bookDescription.slice(0, 200)}</small> </p>
                <div className="card-actions justify-between">
                    <div onClick={() => handleAddToCart(item)}
                        className="badge btn-success badge-outline btn w-1/2">Add To Cart</div>
                    <div className="badge badge-outline p-5">Price:{price}$</div>
                </div>
            </div>
        </div>
    );
};

export default PopluarDetails;