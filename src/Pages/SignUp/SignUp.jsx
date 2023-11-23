import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/Firebase.config";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

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
                console.log("User signed up:", user);
            })
            .catch((error) => {
                console.error("Sign-up error:", error);
            });
    };
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const googleSignIn = () => {

        signInWithPopup(auth, provider)
            .then(result => {
                console.log(result.user)

            })
            .catch(error => {
                console.error(error)
            })
    }

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
                    <div className="flex justify-center mt-2">
                        <button onClick={googleSignIn} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 mx-2">
                            Google
                        </button>
                        <button onClick={googleSignIn} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mx-2">
                            Facebook
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
