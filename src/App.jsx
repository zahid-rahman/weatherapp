import axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayWeather from './components/DisplayWeather';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  const [currentLocationDetails,setCurrentLocationDetails] = useState()
  const [weatherDetails,setWeatherDetails] = useState({})
  const [inputData,setInputData] = useState()

  const getCurrentLocation = () => {
    axios.get(`http://api.ipstack.com/check?access_key=0f7f6854fe7283ccc6c68496d7c50780
    `)
    .then(response => {
      console.log(response.data)
      setCurrentLocationDetails(response.data.region_name)
    })
    .catch(error => {
      console.error(error)
    })
  }

  const getWeatherDetails = (regionName) => {
    console.log(regionName)
    axios.get(`http://api.weatherstack.com/current?access_key=a37ec4099f761ab686c6f665c6ebc59f&query=${regionName}
    `)
    .then(response => {
      console.log(response)
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
    getCurrentLocation()
    console.log(currentLocationDetails)
    getWeatherDetails(currentLocationDetails)
  },[currentLocationDetails])

  const changeRegion = (value) => {
    setInputData(value)
  }

  const changeWeather = (event) => {
    event.preventDefault()
    axios.get(`http://api.weatherstack.com/current?access_key=a37ec4099f761ab686c6f665c6ebc59f&query=${inputData}
    `)
    .then(response => {
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
