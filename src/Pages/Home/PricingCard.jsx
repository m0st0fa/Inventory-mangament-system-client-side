import { useEffect, useState } from "react";
import PricingDetails from "./PricingDetails";

const PricingCard = () => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('priceingCard.json')
            .then(res => res.json())
            .then(data => setCart(data))
    }, [])
    // console.log(cart)
    return (
        <div>
            <h1 className=" text-5xl font-bold text-center">Chose Your Pricing Plan </h1>
            <div className=" grid md:grid-cols-3 gap-4">
                {
                    cart.map(item => <PricingDetails key={item.id} item={item}></PricingDetails>)
                }
            </div>

        </div>
    );
};

export default PricingCard;
