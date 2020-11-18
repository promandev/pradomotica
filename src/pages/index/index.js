import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function Index() {
    const { isLoading } = useAuth0()

    if (isLoading) return <div className="loading-auth">Loading...</div>

    return (
        <div className="home">
            <h1 className="inicio">INICIO</h1>                     
        </div>
    )
}

export default Index
