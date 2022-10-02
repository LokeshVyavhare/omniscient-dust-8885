import { createContext, useReducer } from "react";
import { AuthUserlogReducer } from '../Functions/AuthUserlogReducer'

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {

    const [userlog, dispatch] = useReducer(AuthUserlogReducer, { status: false, user: null });

    const login = (user) => {
        dispatch({ type: 'login', value: user })
    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }
    return <AuthContext.Provider value={{ auth: userlog, login, logout }}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;