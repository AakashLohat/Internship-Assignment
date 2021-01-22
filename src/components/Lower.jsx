import React from 'react'
import "./css/Lower.css"
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import { getSunrise, getSunset } from 'sunrise-sunset-js';

function Lower({ sunrise, sunset }) {
    function format_date(x) {
        x = String(x);
        if (x.length === 1) {
            return "0" + x;
        } else {
            return x;
        }
    }
    const sunrise_set = sunrise;
    const d = new Date(0);
    d.setUTCSeconds(sunrise_set);
    console.log(format_date(d.getHours()) + ":00")
    const sunset_set = sunset;
    const b = new Date(0);
    b.setUTCSeconds(sunset_set);


    return (
        <div className="main__section">
            <div className="sunrise">
                <h4>sunrise</h4>
                <p>{(format_date(d.getHours()) + ":00" + "AM")}</p>
            </div>
            <div className="graph">
                <WbSunnyIcon className="sun__hai" />
                <div className="inner__system">

                </div>
            </div>
            <div className="sunset">
                <h4>sunset</h4>
                <p>{(format_date(b.getHours()) + ":00" + "PM")}</p>
            </div>
        </div>
    )
}

export default Lower
