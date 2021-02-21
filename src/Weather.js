import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log();
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
      icon: response.data.weather[0].icon,
    });
  }
  function search() {
    let apiKey = "b40b1170719118f550e945ff17d55d7a";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function searchLocation(event) {
    event.preventDefault();
    function retrieveCoords(position) {
      console.log(position);
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let apiKey = `b40b1170719118f550e945ff17d55d7a`;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }
    navigator.geolocation.getCurrentPosition(retrieveCoords);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div>
        <div className="Search">
          <div className="row">
            <div className="col-8">
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
                    className="btn btn-primary "
                  />
                </div>
              </form>
            </div>
            <div className="col-4">
              <button
                className="btn btn-primary w-150"
                onClick={searchLocation}
              >
                Currently here
              </button>
            </div>
          </div>
        </div>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
