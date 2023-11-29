import Banner from "./Banner/Banner";
import Popular from "./Popular/Popular";
import PricingCard from "./PricingCard";
import Testimonials from "./Testimonials.JSX";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Popular></Popular>
            <PricingCard></PricingCard>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;