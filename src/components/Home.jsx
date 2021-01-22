import React from 'react'
import { useHistory } from 'react-router-dom'
import "./css/Home.css"
import Temp from "./Tempapp"
function Home() {
    const [current, setCurrent] = React.useState('')
    const [situat, setSituat] = React.useState(false)
    const setsubmit = () => {
        setSituat(true)
    }
    return (
        <div className="home">
            {situat && current.length > 0 ? <Temp citydetails={current} /> : (<div className="small__screen">
                <input type="text" placeholder="City Name " className="input__side" onChange={(event) => { setCurrent(event.target.value) }} />
                <button className="button__side" onClick={setsubmit} >Enter</button>

            </div>)}

        </div>
    )
}

export default Home
