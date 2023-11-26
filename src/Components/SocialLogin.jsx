import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";


const SocialLogin = () => {
    const { googleSignIn } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result)
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.data)
                        navigate('/')
                    })

            })
    }
    return (
        <div>
            <div className="flex justify-center mt-2">
                <button onClick={handleGoogleSignIn} className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 mx-2">
                    Google
                </button>
                <button onClick={handleGoogleSignIn} className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mx-2">
                    Facebook
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;