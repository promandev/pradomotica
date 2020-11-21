import { useAuth0 } from "@auth0/auth0-react"
import React from "react"

export const Nav = () => {
    const { loginWithPopup, logout, isAuthenticated } = useAuth0();
    
    return !isAuthenticated ? (<button className="authentication-buttons__signup">Sign Up</button> && <button onClick={() => loginWithPopup()} className="authentication-buttons__login">Login</button>) : (<button onClick={() => logout()} className="authentication-buttons__logout">Logout</button>)
}

export default Nav;