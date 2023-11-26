
const AddProduct = () => {
    const HandleClickToAddProduct = event => {
        event.preventDefault()
        const form = new FormData(event.currentTarget)
        const Name = form.get('productName')
        const Image = form.get('productImage')
        const Quantity = form.get('productQuantity')
        const Category = form.get('productCategory')
        const Location = form.get('productLocation')
        const productionCost = form.get('productionCost')
        const profitMargin = form.get('profitMargin')
        const discount = form.get('discount')
        const Description = form.get('productDescription')
        const newProduct = { Name, Image, Quantity, Category, Location, productionCost, profitMargin, discount, Description }
        console.log(newProduct)
    }
    return (
        <div className="mx-auto bg-white p-8 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
            <form onSubmit={HandleClickToAddProduct}>
                {/* Product Name*/}
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name="productName" className="mt-1 p-2 w-full border rounded-md" />
                </div>

                {/*  Image Uploading System  */}
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Product image</span>
                    </label>
                    <input type="file" name="productImage" className="mt-1" />
                </div>


                {/*  Product Quantity  */}
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text"> Product Quantity</span>
                    </label>
                    <input type="number" name="productQuantity" className="mt-1 p-2 w-full border rounded-md" />
                </div>
                {/*  Product category  */}
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text"> Product category</span>
                    </label>
                    <input type="text" name="productCategory" className="mt-1 p-2 w-full border rounded-md" />
                </div>
                {/*  Product Location  */}
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Product location</span>
                    </label>
                    <input type="text" name="productLocation" className="mt-1 p-2 w-full border rounded-md" />
                </div>

                {/*  Production Cost  */}
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Product Cost</span>
                    </label>
                    <input type="number" name="productionCost" className="mt-1 p-2 w-full border rounded-md" />
                </div>

                {/*  Profit Margin  */}
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Profit Margin</span>
                    </label>
                    <input type="number" name="profitMargin" className="mt-1 p-2 w-full border rounded-md" />
                </div>

                {/*  Discount  */}
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text"> Product Discount</span>
                    </label>
                    <input type="number" name="discount" className="mt-1 p-2 w-full border rounded-md" />
                </div>

                {/*  Product Description  */}
                <div className="mb-4">
                    <label className="label">
                        <span className="label-text">Product Description</span>
                    </label>
                    <textarea name="productDescription" className="mt-1 p-2 w-full border rounded-md"></textarea>
                </div>
                {/*  Add Product Button  */}
                <div className="flex justify-start">
                    <button type="submit"
                        className=" btn btn-success">
                        Add Product
                    </button>
                </div>

            </form>

        </div>
    );
};

export default AddProduct;
