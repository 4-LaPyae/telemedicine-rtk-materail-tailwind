import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorage } from "./localstorage";
import { useDispatch } from "react-redux";
import { handleAuth } from "./authSlice";
import { setUserData } from "@/pages/login/feature/login_slice";

const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = async () => {
        const userToken = await getLocalStorage("user");
        if (!userToken || userToken === "undefined") {
            dispatch(handleAuth(false));
            setIsLoggedIn(false);
            return navigate("/login");
        } else {
            dispatch(handleAuth(true));
            dispatch(setUserData(JSON.parse(localStorage.getItem("user"))));
            setIsLoggedIn(true);
            return navigate("/dashboard");
        }
    };
    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);

    return children;
};

export default ProtectedRoute;
