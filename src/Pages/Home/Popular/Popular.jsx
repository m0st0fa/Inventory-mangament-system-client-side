import { useEffect, useState } from "react";
import PopluarDetails from "./PopluarDetails";


const Popular = () => {
    const [card, setCart] = useState([])
    useEffect(() => {
        fetch('/public/PopularProduct.json')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])
    return (
        <div>
            <h3 className=" text-5xl text-center font-bold text-red-500 mb-5"> Our Popluar category</h3>

            <div className=" md: grid grid-cols-3 gap-5">
                {
                    card.map(item => <PopluarDetails key={item.id} item={item}></PopluarDetails>)
                }
            </div>
        </div>
    );
};

export default Popular;