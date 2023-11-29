import { useEffect, useState } from "react";

const AllShopInfo = () => {
    const [allShop, setAllShop] = useState([])
    useEffect(() => {
        fetch('http://localhost:5001/createShop')
            .then(res => res.json())
            .then(data => setAllShop(data))
    }, [])
    return (
        <div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Image</th>




                            </tr>
                        </thead>
                        <tbody>
                            {
                                allShop.map((item, index) => <tr key={item}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        <div className="flex items-center">
                                            <div className="avatar">
                                                <div className="w-32 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
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

export default AllShopInfo;