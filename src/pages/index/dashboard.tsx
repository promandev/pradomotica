import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function Dashboard() {
    const { isLoading } = useAuth0()

    if (isLoading) return <div className="loading-auth">Loading...</div>

    return (
        <div className="dashboard">
            <div className="dashboard-container">
                <h1 className="dashboard-title">Index</h1>                     
            </div>
        </div>
    )
}

export default Dashboard
