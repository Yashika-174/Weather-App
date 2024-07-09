import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){

    let [weatherInfo,setWeatherInfo]=useState({city:"Delhi",feelsLike : 39.05,humidity: 70,temp: 32.05,tempMax: 32.05,tempMin: 32.05,weather:"haze"});

    function updateInfo(newInfo){
    setWeatherInfo(()=>{
        return (newInfo);
    })
    }

        return (<div className="WeatherApp">
            <h2 style={{marginTop:"0px"}}>Weather App By  ~OpenWeather</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
        )
}