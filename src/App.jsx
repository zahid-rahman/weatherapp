import axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayWeather from './components/DisplayWeather';
import Navbar from './components/Navbar';
import './index.css';


function App() {
  const [latitude,setLatitude] = useState(0)
  const [longitude,setLongitude] = useState(0)
  const [weatherDetails,setWeatherDetails] = useState({})
  const [inputData,setInputData] = useState()

  const getWeatherDetails = (one,two) => {
    axios.get(`http://api.weatherstack.com/current?access_key=a37ec4099f761ab686c6f665c6ebc59f&query=${one},${two}
    `)
    .then(response => {
      console.log(response.data)
      const weatherData = {
        location:response.data.location.name,
        temperature:response.data.current.temperature,
        description:response.data.current.weather_descriptions[0],
        region:response.data.location.region,
        country:response.data.location.country,
        windSpeed:response.data.current.wind_speed,
        pressure:response.data.current.pressure,
        precip:response.data.current.precip,
        humidity:response.data.current.humidity,
        img:response.data.current.weather_icons
      }
      setWeatherDetails(weatherData)
    })
    .catch(error => {
      console.error(error)
    })

  }

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        // API call 
        console.log(latitude,longitude)
        getWeatherDetails(latitude,longitude)
      })
    }else {
      console.log("not supported")
    }
  },[latitude,longitude])

  const changeRegion = (value) => {
    console.log(value)
    setInputData(value)
  }

  const changeWeather = (event) => {
    event.preventDefault()
    axios.get(`http://api.weatherstack.com/current?access_key=a37ec4099f761ab686c6f665c6ebc59f&query=${inputData}
    `)
    .then(response => {
      console.log(response.data)
      const weatherData = {
        location:response.data.location.name,
        temperature:response.data.current.temperature,
        description:response.data.current.weather_descriptions[0],
        region:response.data.location.region,
        country:response.data.location.country,
        windSpeed:response.data.current.wind_speed,
        pressure:response.data.current.pressure,
        precip:response.data.current.precip,
        humidity:response.data.current.humidity,
        img:response.data.current.weather_icons
      }
      setWeatherDetails(weatherData)
    })
  }

  return (
    <div className="container">
      <Navbar changeWeather={changeWeather} changeRegion={changeRegion}></Navbar>
      <DisplayWeather weather={weatherDetails}></DisplayWeather>
    </div>
  );
}

export default App;
