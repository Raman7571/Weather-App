import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feels_like:24.84,
        humidity:47,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        weather:"haze"
    });
    let updateWeather= (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(

        <div style={{textAlign:"center"}}>
            <h1>Weather App By Delta</h1>
            <h2>Developed by-@Raman Mishra</h2>
            <SearchBox updateInfo={updateWeather}/>
            <InfoBox Info={weatherInfo}/>
        </div>
    )
}