/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    useEffect(() => {
        console.log("User:", user);
        console.log("Loading:", loading);
    }, [user, loading]);

    if (loading) {
        return <progress className="progress w-56"></progress>;
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login' replace></Navigate>
};

export default PrivateRoutes;
