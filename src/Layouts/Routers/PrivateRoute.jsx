import { useContext } from "react";
import { AuthConText } from "../../Providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthConText)
    const location = useLocation()
    console.log(location.pathname)
    if(loading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    if(user) {
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;