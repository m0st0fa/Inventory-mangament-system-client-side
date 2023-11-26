import Swal from "sweetalert2";
import { AiTwotoneDelete } from "react-icons/ai";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaPlusMinus } from "react-icons/fa6";


const ProductSection = () => {
    // const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2)
    const axiosSecure = useAxiosSecure()
    const handleClickToDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            // refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    // 
    return (
        <div>
           
            <div className="overflow-x-auto">
                <table className="table  w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>sale Count</th>
                            <th>Update</th>
                            <th> Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        <th>
                            1
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td className="text-2xl text-gray-600 ">
                            name
                        </td>
                        <td>$Quantity</td>
                        <td>Count</td>
                        <th>
                            <button
                                onClick={() => handleClickToDelete}
                                className="btn btn-ghost btn-lg">
                                < FaPlusMinus className="text-red-600 text-4xl font-bold"></FaPlusMinus>
                            </button>
                        </th>
                        <th>
                            <button
                                onClick={() => handleClickToDelete}
                                className="btn btn-ghost btn-lg">
                                <AiTwotoneDelete className="text-red-600 text-4xl font-bold"></AiTwotoneDelete>
                            </button>
                        </th>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductSection;