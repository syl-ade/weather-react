import React, { useState } from "react";
import axios from "axios";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
    console.log(response.data);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <WeatherIcon code={forecast.list[0].weather[0].icon} />
        {Math.round(forecast.list[0].main.temp)}°C
      </div>
    );
  } else {
    let apiKey = `b40b1170719118f550e945ff17d55d7a`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleForecastResponse);
    return "loading...";
  }
}
