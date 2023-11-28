/* eslint-disable react/prop-types */

const PricingDetails = ({ item }) => {
    const { plan, price, description } = item;

    return (
        <div className="card bg-base-100 shadow-xl p-4 rounded-lg my-10">
            <div className="card-body">
                <h2 className="card-title text-2xl font-semibold mb-2">
                    {plan}
                    <div className="badge badge-secondary ml-2">{price}</div>
                </h2>
                <p className="text-sky-700 text-sm">{description}</p>
            </div>
            <div>
                <button className=" btn btn-success w-full">Select Plan</button>
            </div>
        </div>
    );
};

export default PricingDetails;
