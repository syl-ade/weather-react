import React from "react";
import "./WeatherApp.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <Search />
      <CurrentWeather />
    </div>
  );
}
