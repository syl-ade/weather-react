import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
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
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = "b40b1170719118f550e945ff17d55d7a";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  if (weatherData.ready) {
    return (
      <div>
        <div className="Search">
          <div className="row">
            <div className="col-9">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Type a location..."
                  className="text"
                  autofocus="on"
                  onChange={updateCity}
                />
                <div className="col-3">
                  <input
                    type="submit"
                    value="Check the weather"
                    className="btn btn-primary w-200"
                  />
                </div>
              </form>
            </div>
            <div className="col-2">
              <button className="btn btn-primary w-150" id="current-button">
                Current
              </button>
            </div>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
