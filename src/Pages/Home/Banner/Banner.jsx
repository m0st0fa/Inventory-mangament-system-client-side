
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-96">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/inventory-stock-manufacturing-assets-goods-concept_53876-133673.jpg?w=1800&t=st=1701170043~exp=1701170643~hmac=d99223838c1caf1836187e0b671fa0e06483760f5af907e0157a73bc9fbc5d40" className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-vector/designers-working-internet-store-website_1262-19238.jpg?w=1800&t=st=1701170109~exp=1701170709~hmac=2fb0c0832a7e148db365f00414a62873270a22c46e57d4a90e42df08ac009299" className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/premium-photo/warehouse-management-innovative-software-computer-real-time-monitoring_31965-19830.jpg?w=1800" className="w-full" />
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;