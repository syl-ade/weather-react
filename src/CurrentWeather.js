import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function CurrentWeather() {
  let city = "London";
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      pressure: response.data.main.pressure,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="CurrentWeather">
        <div className="row">
          <div className="col" id="left-col">
            <div id="current-date">
              <FormattedDate date={weatherData.date} />
            </div>
            <div id="current-time">
              <FormattedTime date={weatherData.date} />
            </div>
            <div id="parameters">
              <div>
                Humidity: <span id="humidity">{weatherData.humidity}</span>%
              </div>
              <div>
                Wind: <span id="wind">{weatherData.wind}</span>
                <span id="wind-unit"> km/h</span>
              </div>

              <div>
                Pressure: <span id="pressure">{weatherData.pressure}</span>
                <span id="pressure-unit"> hPa</span>
              </div>
            </div>
          </div>
          <div className="col" id="middle-col">
            <div id="current-location">{weatherData.city}</div>
            <div id="temperature">
              <span id="current-temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span id="units">
                <a href="#" className="active" id="celsius-link">
                  {" "}
                  °C{" "}
                </a>
                |
                <a href="#" className="active" id="farenheit-link">
                  {" "}
                  °F{" "}
                </a>
              </span>
            </div>
            <div className="row" id="max-min">
              <div className="col max-min">
                max:{" "}
                <span id="max-temp">{Math.round(weatherData.maxTemp)}</span>
                <span className="unit" id="unit-max"></span>
              </div>
              <div className="col max-min">
                min:{" "}
                <span id="min-temp">{Math.round(weatherData.minTemp)}</span>
                <span className="unit" id="unit-min"></span>
              </div>
            </div>
          </div>

          <div className="col" id="right-col">
            <div className="row">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
            </div>
            <div className="row">
              <div className="description">{weatherData.description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b40b1170719118f550e945ff17d55d7a";
    let city = "London";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
