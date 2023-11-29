import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../../Components/SocialLogin";

const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    console.log('login page location', location)
    const { signIn } = useAuth()
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password)
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown',
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp',
                    },
                });
                navigate(location?.state ? location.state : '/'); 

            })
            .catch(error => {
                console.error(error)
            })

    }
  

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-4xl text-purple-600 font-bold text-center mb-6">Login Here</h2>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md" placeholder="you@example.com" required />
                    </div>
                    <div>
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" className="mt-1 p-2 w-full border rounded-md" placeholder="********" required />
                        <p className="text-xs text-gray-500 mt-1">
                            <a href="#" className="text-blue-500 hover:underline">
                                Forgot your password?
                            </a>
                        </p>
                    </div>
                    <div>
                        <button className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                            Login
                        </button>
                    </div>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-600">Do not Have an Account? <Link className="text-green-500 font-semibold" to='/signup'>Register here</Link></p>
                    <div className="flex justify-center mt-2">
                       
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
