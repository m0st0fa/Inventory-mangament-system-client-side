/* eslint-disable react/prop-types */

const PopluarDetails = ({ item }) => {
    const { brand, image } = item;

    return (
        <div>
            <div className="card shadow-xl outline outline-offset-2 outline-blue-500" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <figure><img className="w-full h-80" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions">
                        <button className="btn w-full ">{brand}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopluarDetails;