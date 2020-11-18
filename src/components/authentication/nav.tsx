import { useAuth0 } from "@auth0/auth0-react"
import React from "react"

export const Nav = () => {
    const { loginWithPopup, logout, isAuthenticated } = useAuth0();
    
    return !isAuthenticated ? (<button onClick={() => loginWithPopup()}>Login</button>) : (<button onClick={() => logout()}>Logout</button>)
}

export default Nav;