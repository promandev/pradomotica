import React from 'react'

import { useAuth0 } from '@auth0/auth0-react'

const Loading = (i: any) => {

    const { isLoading } = useAuth0()

    return (
        isLoading && (
            <div className="loading-auth">Loading...</div>
        )
    )
}

export default Loading
