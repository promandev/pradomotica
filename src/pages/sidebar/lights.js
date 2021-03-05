import React from 'react'

import Loading from '../../components/header/components/authentication/loading'

function Lights() {
    
    return (
        <>
        <Loading/>
        <div className="lights">
            <div className="lights-container">
                <h1 className="lights-title">Lights</h1>
            </div>
        </div>
        </>
    )
}

export default Lights