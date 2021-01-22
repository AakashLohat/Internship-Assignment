import React from 'react'
import "./css/Stories.css"

import Internal from './Internal';
function Stories() {
    return (
        <div className="stories">

            <Internal day="mon" temp="23.5°" weath="sunny" />
            <Internal day="tue" temp="12°" weath="cloudy" />
            <Internal day="wed" temp="15.1°" weath="cloudy" />
            <Internal day="thu" temp="28.5°" weath="sunny" />
            <Internal day="fri" temp="19.3°" weath="cloudy" />
            <Internal day="sat" temp="20.1°" weath="sunny" />
            <Internal day="sat" temp="20.1°" weath="sunny" />
            <Internal day="sat" temp="20.1°" weath="sunny" />
            <Internal day="sat" temp="20.1°" weath="sunny" />
            <Internal day="sat" temp="20.1°" weath="sunny" />



        </div>
    )
}

export default Stories
