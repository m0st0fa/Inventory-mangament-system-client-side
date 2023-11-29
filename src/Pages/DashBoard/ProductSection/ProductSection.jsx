import { FaTrashAlt } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAllProduct from "../../../Hooks/useAllProduct";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";



const ProductSection = () => {
    const [product, refetch] = useAllProduct();
    const axiosSecure = useAxiosSecure()
    const handleClickToDeleteProduct = product => {
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
                axiosSecure.delete(`/addProduct/${product._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
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
    // console.log(product)
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Image</th>
                                <th>quantity</th>
                                <th>Discount</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map((item) => <tr key={item._id}>
                                    <td>
                                        {item._id}
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        <div className="flex items-center">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-left font-bold text-xl">{item.quantity}</td>
                                    <td className="text-left text-2xl">${item.discount}</td>
                                    <td>
                                        <Link to={`/dashboard/updateProduct/${item._id}`}>
                                            <button 
                                                className="btn btn-ghost btn-lg bg-green-500">
                                                <GrUpdate className="text-white"></GrUpdate>
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleClickToDeleteProduct(item)}
                                            className="btn btn-ghost text-4xl text-red-500">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductSection;

