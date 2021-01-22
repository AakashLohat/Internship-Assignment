import React from 'react'
import "./css/style.css"
import SearchIcon from '@material-ui/icons/Search';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import BarChat from './BarChat';
import Lower from "./Lower"
import Stories from "./Stories"
import LocationOnIcon from '@material-ui/icons/LocationOn';
function Tempapp({ citydetails }) {
    const [city, setCity] = React.useState(null);
    const [search, setSearch] = React.useState(citydetails);
    const [system, setSystem] = React.useState(null)
    React.useEffect(() => {
        const fetchApi = async () => {
            const api__key = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c2373fa338ce79ac4ec84dd67dca9547`
            const response = await fetch(api__key)
            const resApi = await response.json()
            setCity(resApi.main)

            setSystem(resApi.sys)

        }
        fetchApi();
    }, [search])
    console.log(system)
    return (
        <>
            <div className="box">








                <input type="text
                 " placeholder="search" className="search__bar" onChange={(event) => { setSearch(event.target.value) }} />
                <SearchIcon className="search__icon" />


                <div className="forecast">

                    <Stories />

                </div>
                <div className="info">
                    <div className="small__header">


                        <h4 className="temp">
                            {city?.temp}°cel
                        </h4>

                        <WbSunnyIcon />

                    </div>
                    <div className="tem__ver">

                        <BarChat />




                    </div>

                    <div className="pressure">
                        <h4>pressure</h4>
                        <p>{city?.pressure} hpa</p>
                    </div>
                    <div className="humadity">
                        <h4>humadity</h4>
                        <p>{city?.humidity}%</p>
                    </div>
                    <Lower sunrise={system?.sunrise} sunset={system?.sunset} />

                </div>

            </div>
        </>
    )
}

export default Tempapp
