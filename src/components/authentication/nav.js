import React from "react"
import {useAuth} from "react-use-auth"

export const Nav = () => {
    const {isAuthenticated, login, logout} = useAuth()
    
    return (
        <nav>
            <button onClick={() => login()}>Login</button>
            <button onClick={() => logout()}>Logout</button>
        </nav>
    )
}

export default Nav;