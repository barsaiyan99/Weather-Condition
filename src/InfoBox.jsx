import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({info}){
    const Rainy_URL ="https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnl8ZW58MHx8MHx8fDA%3D";
    const Hot_URL="https://images.unsplash.com/photo-1501630834273-4b5604d2ee31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Cold_URL = "https://images.unsplash.com/photo-1477468572316-36979010099d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    return(
        <div className="InfoBox">
                 <div className="Container">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?Rainy_URL: info.temp>20 ?Hot_URL:Cold_URL}
        title="green iguana"
      />
      <CardContent className='card-section' >
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          <p>Temperature is {info.temp}&deg;C</p>
          <p>Minimum Temperature is {info.tempMin}&deg;C</p>
          <p>Maximum Temperature is {info.tempMax}&deg;C</p>
          <p>Humidity is {info.humidity}</p>
          <p>Feels like {info.feelslike}&deg;C</p>
          <p>Weather is {info.weather}</p>
          <p>This Weather can be describes as <i>{info.weather} </i>and feels like {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
      </div>
        </div>
    );
}