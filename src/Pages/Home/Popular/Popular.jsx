import PopluarDetails from "./PopluarDetails";
import useProduct from "../../../Hooks/useProduct";


const Popular = () => {
    const [menu] = useProduct()
    return (
        <div>
            <h3 className=" text-5xl text-center font-bold text-red-500 mb-5"> Our Popluar category</h3>

            <div className=" md: grid grid-cols-3 gap-4">
                {
                    menu.map(item => <PopluarDetails key={item._id} item={item}></PopluarDetails>)
                }
            </div>
        </div>
    );
};

export default Popular;