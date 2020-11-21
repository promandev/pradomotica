import { useAuth0 } from "@auth0/auth0-react"
import React from "react"

export const Nav = ():any => {
    const { loginWithPopup, logout, isAuthenticated } = useAuth0();
    
    return !isAuthenticated ? [(<span><button className="authentication-buttons__signup">Sign Up</button></span>), (<span><button onClick={(e) => loginWithPopup()} className="authentication-buttons__login">Login</button></span>)] : (<span><button onClick={(e) => logout()} className="authentication-buttons__logout">Logout</button></span>)
}

export default Nav;