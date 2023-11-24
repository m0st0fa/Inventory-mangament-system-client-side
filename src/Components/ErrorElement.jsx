import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className=" my-20 card w-1/2 mx-auto">
            <img className="w-full" src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg" alt="" />
            <div className="mx-auto my-6">
            <Link to="/">
                <button className="btn btn-success ">Back to Home </button>
            </Link>
            </div>
        </div>
    );
};

export default ErrorElement;