import React from 'react'

import Loading from '../../components/header/components/authentication/loading'

function Garden() {
    
    return (
        <>
        <Loading/>
        <div className="garden">
            <div className="garden-container">
                <h1 className="garden-title">Garden</h1>
            </div>
        </div>
        </>
    )
}

export default Garden