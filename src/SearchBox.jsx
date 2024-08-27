import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e1c3f3ed642fd932bb3d1e2f9fba4836";

    let getWeatherInfo = async ()=>{
        try{
            let response =  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
             city:city,
             temp: jsonResponse.main.temp,
             tempMin: jsonResponse.main.temp_min,
             tempMax: jsonResponse.main.temp_max,
             humidity: jsonResponse.main.humidity,
             feels_like: jsonResponse.main.feels_like,
             weather: jsonResponse.weather[0].description
            };
            console.log(result);
            return result;
        } catch (error){
           throw err;
        }
       
    }

    let handleChange = (event)=>{
        setCity(event.target.value);
    }

    let handleSubmit = async(evt)=>{
        try{
            evt.preventDefault();
            console.log(city);
            setCity("");
           let newInfo = await getWeatherInfo();
           updateInfo(newInfo);
        } catch (err){
            setError(true)
        }
       
    };
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
            <br></br><br></br>
            <Button variant="contained" type='submit' >
             Search
              </Button>
            {error&&<p style={{color:"red"}}>No such place exits!</p>}
            </form>
        </div>
    )
}