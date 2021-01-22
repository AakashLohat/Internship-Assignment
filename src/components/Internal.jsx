import React from 'react'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import "./css/Internal.css"
import FilterDramaIcon from '@material-ui/icons/FilterDrama';

function Internal({ day, temp, weath }) {
    return (
        <div className="stories__info">
            <div className="stories__name">
                {day}
            </div>
            <h4 className="temp__rate" >{temp}</h4>
            <div className="slider__img">
                <span>
                    {weath == 'sunny' ? <WbSunnyIcon /> : <div className="he"><FilterDramaIcon /></div>}

                </span>
            </div>
            <p className="we__name">{weath}</p>
        </div>

    )
}

export default Internal
