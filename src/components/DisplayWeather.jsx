import React from 'react'

const DisplayWeather = (props) => {

    const { temperature, description, location, region, country, windSpeed, pressure, precip, humidity, img } = props.weather;

    const { error } = props

    return (
        <div className="user-weather">
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 weather-temp">
                            <h1>{temperature}<sup>o</sup>C , {description}</h1>
                            <h4>{location}</h4>
                            <p>{!region ? 'No Data' : region} , {country}</p>
                        </div>

                        <div className="col-xl-9 col-lg-9 col-md-6 col-sm-12 col-12">
                            <img className="mainImg" src={img} alt="weather-img" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 weather-info">
                            <p><b>Wind Speed</b>(km/hr)</p>
                            <h2>{windSpeed}</h2>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 weather-info">
                            <p><b>Preassure</b>(millibar)</p>
                            <h2>{pressure}</h2>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 weather-info">
                            <p><b>Precipitation</b>(mm)</p>
                            <h2>{precip}</h2>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 weather-info">
                            <p><b>Humidity</b>(%)</p>
                            <h2>{humidity}</h2>
                        </div>

                    </div>
        </div>
    )
}

export default DisplayWeather