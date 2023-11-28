
import { CiShop } from "react-icons/ci";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const image_hosting_key = import.meta.env.VITE_IMG_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const CreateShop = () => {
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
      // now sent the menu item data to the server with the img url 
      const createShop = {
        name: data.name,
        location: data.location,
        email: data.email,
        description: data.description,
        owner_name: data.owner_name,
        image: res.data.data.display_url
      }
      // post to database
      const shopRes = await axiosSecure.post('/createShop', createShop)
      console.log(shopRes.data)
      if (shopRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the shopCollection.`,
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
              <span className="label-text">Shop Name</span>
            </label>
            <input
              type="text"
              placeholder="Shop Name"
              {...register('name', { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label className="label">
              <span className="label-text">Shop Location</span>
            </label>
            <input
              type="text"
              placeholder="Shop Location"
              {...register('location', { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label className="label">
              <span className="label-text"> Owner Email</span>
            </label>
            <input
              type="text"
              placeholder="Enter your Email"
              {...register('email', { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4">
            <label className="label">
              <span className="label-text">Owner Name</span>
            </label>
            <input
              type="text"
              placeholder="Owner Name"
              {...register('owner_name', { required: true })}
              required
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="label">
            <span className="label-text">Shop Description</span>
          </label>
          <textarea
            {...register('description')}
            className="textarea textarea-bordered h-24 w-full"
            placeholder="Description"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="label block text-lg text-red-400 font-semibold mb-2">
            Shop Logo
          </label>
          <input
            {...register('image', { required: true })}
            type="file"
            className="file-input w-full max-w-xs"
          />
        </div>

        <button className="btn btn-success">
          Create Shop <CiShop className="font-bold" />
        </button>
      </form>
    </div>

  );
};

export default CreateShop;