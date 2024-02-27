
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import FlashMessage from 'react-flash-message'
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let[city,setCity] = useState("");
    let[err,setErr] = useState(false);
    const API_KEY="8f7358023d2ae9f75d4c5a2ca1b24da0";
    const API =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    let getInfo=async()=>{
        try{
            let resp = await fetch(API);
            let jsonResp = await resp.json();
            console.log(jsonResp);
            let result = {
              city: city,
              temp: jsonResp.main.temp,
              tempMax: jsonResp.main.temp_max,
              tempMin: jsonResp.main.temp_min,
              feelslike: jsonResp.main.feels_like,
              humidity: jsonResp.main.humidity,
              weather: jsonResp.weather[0].description,
            }
            console.log(result);
            return result;
        }
        catch(err)
        {
            throw err;
        }
   
    };

    let changeCity=(event)=>{
        setCity(event.target.value);
    };
    let handleClick = async (event)=>{
        try{console.log(city);
            event.preventDefault();
            let newInfo = await getInfo();
            updateInfo(newInfo);
            setCity("");
        }
            catch(err){
                setErr(true);
                setTimeout(() => {
                    setErr(false);
                  }, 1500);
            }
        
    }
    return(
        <div id='searchBox'>
            <form onSubmit={handleClick}>
            <TextField id="city" label="city name" variant="outlined" value={city} onChange={changeCity} required />
            <br /><br />
            <Button variant="contained" size='medium' type='submit'>Search</Button>
            {err&&
            <p style={{color:"red"}}>No such Place Exists</p>}
            
            </form>
        </div>
    );
}   