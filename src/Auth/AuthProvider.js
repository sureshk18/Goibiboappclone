import React, { createContext, useContext, useState } from "react";
import { userSignup } from "./apis/indexApi";

export const AuthContext = createContext();


export default function AuthProvider({ children }) {
    const [user, setUser] = useState();

    const login = () => {

    }

    const Signup = (email, password) => {
        userSignup()
    }

    const logout = () => {

    }
    return (
        <AuthContext.Provider value={{ user, login, Signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};



export const useAuth = () => {
    return useContext(AuthContext);
}