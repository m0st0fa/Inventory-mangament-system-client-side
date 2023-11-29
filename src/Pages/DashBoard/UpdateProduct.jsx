/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

import { CiShop } from "react-icons/ci";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateProduct = () => {
    const { name, quantity, category, location, cost, margin, discount, description,_id } = useLoaderData();


    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imageBB and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                quantity: data.quantity,
                category: data.category,
                location: data.location,
                cost: data.cost,
                margin: data.margin,
                discount: data.discount,
                description: data.description,
                image: res.data.data.display_url,
            }
            // 
            const productRes = await axiosSecure.patch(`/addProduct/${_id}`, menuItem);
            console.log(productRes.data)
            if (productRes.data.modifiedCount > 0) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is updated to the productCollection.`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data);
    };

    return (
        <div className="max-w-7xl rounded-2xl p-6 mt-5 mx-auto bg-slate-300 shadow-lg">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={name}
                            placeholder="Product Name"
                            {...register('name')}
                            className="input input-bordered w-full"
                        />
                    </div>
                    {/* Product quantity */}
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="label">
                            <span className="label-text">Product Quantity</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={quantity}
                            placeholder="Product Quantity"
                            {...register('quantity')}

                            className="input input-bordered w-full"
                        />
                    </div>
                </div>
                {/* Product Category */}
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={category}
                            placeholder="Enter the Product Category"
                            {...register('category')}

                            className="input input-bordered w-full"
                        />
                    </div>
                    {/* product location  */}
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={location}
                            placeholder="Location"
                            {...register('location')}

                            className="input input-bordered w-full"
                        />
                    </div>
                </div>
                {/* product */}
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="label">
                            <span className="label-text">Cost</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={cost}
                            placeholder="Enter the Product Category"
                            {...register('cost')}

                            className="input input-bordered w-full"
                        />
                    </div>
                    {/* product Margin*/}
                    <div className="w-full md:w-1/2 px-4 mb-4">
                        <label className="label">
                            <span className="label-text">Margin</span>
                        </label>
                        <input
                            type="text"
                            defaultValue={margin}
                            placeholder="Margin"
                            {...register('margin')}

                            className="input input-bordered w-full"
                        />
                    </div>
                </div>
                {/* product discount */}
                <div className="w-full md:w-full  mb-4">
                    <label className="label">
                        <span className="label-text">Discount</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={discount}
                        placeholder="Discount"
                        {...register('discount')}

                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        {...register('description')}
                        defaultValue={description}
                        className="textarea textarea-bordered h-24 w-full"
                        placeholder="Description"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="label block text-lg text-red-400 font-semibold mb-2">
                        Image
                    </label>
                    <input
                        {...register('image')}
                        type="file"
                        className="file-input w-full max-w-xs"
                    />
                </div>
                <button className="btn btn-success">
                    Update the Product <CiShop className="font-bold" />
                </button>
            </form>
        </div>
    );
};

export default UpdateProduct;

