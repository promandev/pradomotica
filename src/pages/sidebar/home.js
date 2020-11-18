import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'
import Profile from '../../components/header/components/authentication/profile'

function Home() {

    const { isLoading } = useAuth0()

    if (isLoading) return <div className="loading-auth">Loading...</div>

    return (
        <div className="home">
            <div className="profile">
                <Profile/>
            </div>                     
        </div>
    )
}

export default Home

