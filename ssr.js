import React from "react";
import { navigate } from "gatsby";
 
import { AuthProvider } from "react-use-auth";
 
export const wrapRootElement = ({ element }) => (
    <AuthProvider
        navigate={navigate}
        auth0_domain="dev-hdft04wj.eu.auth0.com"
        auth0_client_id="MK6pbOc2PXu85wNTCurU4Lsul7E2z21v"
    >
        {element}
    </AuthProvider>
);