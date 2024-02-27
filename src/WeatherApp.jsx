import SearchBox from "./SearchBox";    
import InfoBox from "./InfoBox";
import "./WeatherApp.css";
import { useState } from "react";
export default function WeatherApp(){
    let[weatherInfo,setWeatherInfo] = useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:32.05,
        humidity:47,
        weather:"haze",
    });
    let updateInfo =(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2 className="heading">Weather Application</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}