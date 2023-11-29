
import { Link, useNavigate } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const { createUser } = useAuth()

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                // console.log("User signed up:", user);
                axiosPublic.post('/users', user)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('user added to the database')
                            // reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    })

            })
            .catch((error) => {
                console.error("Sign-up error:", error);
            });

    };


    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-3xl font-semibold text-center mb-6">Register</h2>
                <form onSubmit={handleSignUp} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" className="mt-1 p-2 w-full border rounded-md" placeholder="Your Name" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">PhotURL</span>
                        </label>
                        <input type="text" name="photo" className="mt-1 p-2 w-full border rounded-md" placeholder="https://example.com/photo.jpg" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" className="mt-1 p-2 w-full border rounded-md" placeholder="Enter your Email" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" className="mt-1 p-2 w-full border rounded-md" placeholder="********" required />
                    </div>
                    <div>
                        <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                            Register
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-600">Already Have An account? <Link className="text-green-500 font-semibold" to='/login'>Login here</Link></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
