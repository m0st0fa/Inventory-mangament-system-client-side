
import { CiShop } from "react-icons/ci";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";


const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddProduct = () => {
    const [shopData, setShopData] = useState([])
    useEffect(() => {
        fetch('https://final-assigment-server.vercel.app')
            .then(res => res.json())
            .then(data => setShopData(data))
    }, [])
//    console.log(shopData)
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async (data) => {
        // image  upload to imgBB and the get the url 
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // Sent the product item into the database 
            const createShop = {
                name: data.name,
                quantity: data.quantity,
                category: data.category,
                location: data.location,
                cost: data.cost,
                margin: data.margin,
                discount: data.discount,
                description: data.description,
                image: res.data.data.display_url,
                Shop_Name: shopData.name,
                ShopId: shopData._id
            }
            // post to database
            const productRes = await axiosSecure.post('/addProduct', createShop)
            console.log(productRes.data)
            if (productRes.data.insertedId) {
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the productCollection`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        console.log('with image url', res.data)
    }

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
                            placeholder="Product Name"
                            {...register('name', { required: true })}
                            required
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
                            placeholder="Product Quantity"
                            {...register('quantity', { required: true })}
                            required
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
                            placeholder="Enter the Product Category"
                            {...register('category', { required: true })}
                            required
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
                            placeholder="Location"
                            {...register('location', { required: true })}
                            required
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
                            placeholder="Enter the Product Category"
                            {...register('cost', { required: true })}
                            required
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
                            placeholder="Location"
                            {...register('margin', { required: true })}
                            required
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
                        placeholder="Discount"
                        {...register('discount', { required: true })}
                        required
                        className="input input-bordered w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea
                        {...register('description')}
                        className="textarea textarea-bordered h-24 w-full"
                        placeholder="Description"
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label className="label block text-lg text-red-400 font-semibold mb-2">
                        Image
                    </label>
                    <input
                        {...register('image', { required: true })}
                        type="file"
                        className="file-input w-full max-w-xs"
                    />
                </div>
                <button className="btn btn-success">
                    Add Product <CiShop className="font-bold" />
                </button>
            </form>
        </div>

    );
};

export default AddProduct;