import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
const axiosSecure = axios.create({
    baseURL: 'http://localhost:5001'
})

const useAxiosSecure = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()
    // 
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        // console.log('request stopped by interceptors', token)
        config.headers.Authorization = `Bearer ${token}`
        return config
    }, function (error) {
        return Promise.reject(error);
    })
    // interceptors 401 and 403 error
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        const status = error.response.status;
        // console.log('stats error in the interceptors', status)
        if (status === 403 || status === 401) {
            await logout();
            // get out form the section
            navigate('/login')
        }
        return Promise.reject(error)
    })
    return axiosSecure;
};

export default useAxiosSecure;
