import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

// required --> form validation ke lie
export default function SearchBox({updateInfo}){


    let [city,setCity]=useState("");
    let [error,setError]=useState(false);



    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="59f6b85f10cbadd03dfa56ca74ab4cec";

    async function getWeatherInfo(){
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&  units=metric`);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);
        let result={
            city:city,
            temp:(jsonResponse.main.temp-273.15).toFixed(2),
            tempMin:(jsonResponse.main.temp_min-273.15).toFixed(2),
            tempMax:(jsonResponse.main.temp_max-273.15).toFixed(2),
            humidity:jsonResponse.main.humidity,
            feelsLike:(jsonResponse.main.feels_like-273.15).toFixed(2),
            weather:jsonResponse.weather[0].description
        }

        console.log(result);
        return result;
        }
        catch(err){
            throw err;
        }
        
    }



function handleChange(event){
        setCity(()=>{
            return (event.target.value);
        })
}

async function handleSubmit(event){
    try{
        setError(false);
    event.preventDefault();
    console.log(city);
    const newInfo=await getWeatherInfo();
    updateInfo(newInfo);
    setCity("");
    }
    catch(err){
        setError(true);
        setCity("");
    }
}


    return (<div className='SearchBox'>
        <form onSubmit={handleSubmit}>

    <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required />
    <br/><br/>
     <Button variant="contained" type="submit">
        Search
      </Button>
      {error && <p style={{color:"maroon"}}>Sorry, No such Place Exists in our API !!</p>}
        </form>
    </div>)
}