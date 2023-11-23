
const CreateShop = () => {
    return (
        <div className=" mx-auto p-8 bg-white rounded shadow-md mt-8 md:w-full">
            <form>
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Shop Name</span>
                    </label>
                    <input type="text" name="shopName" required
                        className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Shop Logo</span>
                    </label>
                    <input type="file" name="shopLogo" accept="image/*" required
                        className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Shop Description</span>
                    </label>
                    <textarea name="shopInfo" required
                        className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"></textarea>
                </div>
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Shop Location</span>
                    </label>
                    <input type="text" name="shopLocation" required
                        className="border rounded w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
                </div>
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Shop owner Mail</span>
                    </label>
                    <input type="email" name="shopOwnerEmail" placeholder="user@example.com"
                        className="border rounded w-full py-2 px-3 bg-gray-100" />
                </div>

                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Shop Owner Name</span>
                    </label>
                    <input type="text" name="shopOwnerName" placeholder="Mostofa kamal"
                        className="border rounded w-full py-2 px-3 bg-gray-100" />
                </div>

                <button type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300">
                    Create Shop
                </button>
            </form>
        </div>
    );
};

export default CreateShop;
