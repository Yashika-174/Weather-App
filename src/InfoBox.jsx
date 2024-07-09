import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';



export default function InfoBox({info}){

    const initial_image_url="https://plus.unsplash.com/premium_photo-1674475755376-d9c8b21812e9?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const HOT_URL="https://images.unsplash.com/photo-1521223619409-8085d2607891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    const COLD_URL="https://images.unsplash.com/photo-1613416721396-6565d7b3dcb2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const RAIN_URL="https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";




return (<div className="InfoBox">
<div className='cardContainer'>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?(RAIN_URL):(info.temp>15?HOT_URL:COLD_URL)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <b>{info.city.charAt(0).toUpperCase() + info.city.slice(1)}</b> {info.humidity>80?(<ThunderstormIcon/>):(info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>)}
        </Typography>
        <Typography variant="body2" color="black" component={"span"}>
          <div><b>Temperature: </b>{info.temp}&deg;C</div>
          <div><b>Humidity: </b>{info.humidity}</div>
          <div><b>Min Temperature: </b>{info.tempMin}&deg;C</div>
          <div><b>Max Temperature: </b>{info.tempMax}&deg;C</div>
          <div><i>The weather can be described as {info.weather} and it feels like {info.feelsLike}&deg;C</i></div>
        </Typography>
      </CardContent>
    </Card>
    </div>
</div>)
}