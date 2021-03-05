import React from 'react'

import Loading from '../../components/header/components/authentication/loading'
import UserProfile from '../../components/header/components/authentication/userProfile'

function Profile() {

    return (
        <>
        <Loading/>
        <div className="profile">
            <div className="profile-container">
                <h1 className="profile-title">Profile</h1>
                <UserProfile/>
            </div>   
        </div>
        </>
    )
}

export default Profile
