import React from "react";
import "./App.css";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";

export default function App() {
  return (
    <div className="App">
      <div className="WeatherApp">
        <Search />
        <CurrentWeather />
        <div>
          This project was created by <a href="#">Sylwia Aderek</a> and is open
          source on <a href="#">GitHub</a>.
        </div>
      </div>
    </div>
  );
}
