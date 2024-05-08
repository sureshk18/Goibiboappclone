import React from "react";
import { useAuth } from "./AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



export default function AuthNavigate({ children }) {
    const { isLoggedIn } = useAuth();
    const { pathname } = useLocation();

    return isLoggedIn ? (
        children
    ) : (
        <Navigate to='/login' state={{ prevPath: pathname }} />
    );
};