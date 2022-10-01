import { createContext } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    return <AuthContext.Provider value='false'>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;