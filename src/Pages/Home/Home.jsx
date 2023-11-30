import Banner from "./Banner/Banner";
import Popular from "./Popular/Popular";
import PricingCard from "./PricingCard";
import Testimonials from "./Testimonials.JSX";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-10">
                <Popular></Popular>
            </div>
            <PricingCard></PricingCard>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;