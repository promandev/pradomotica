import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function Dashboard() {
    const { isLoading } = useAuth0()

    if (isLoading) return <div className="loading-auth">Loading...</div>

    return (
        <div className="dashboard">
            <h1 className="inicio">PRADOMÓTICA</h1>                     
        </div>
    )
}

export default Dashboard
