import React from "react";
import "./WeatherTemperature.css";
export default function WeatherTemperature(props) {
  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }
  if (props.unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="current-temp">
          <span id="current-temperature">
            {Math.round(props.celsius.temperature)}
          </span>
          <span id="units">
            °C |
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </div>
        <div className="row" id="max-min">
          <div className="col max-min">
            max: <span id="max-temp">{Math.round(props.celsius.maxTemp)}</span>
            <span className="unit" id="unit-max">
              °C
            </span>
          </div>
          <div className="col max-min">
            min: <span id="min-temp">{Math.round(props.celsius.minTemp)}</span>
            <span className="unit" id="unit-min">
              °C
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="current-temp">
          <span id="current-temperature">
            {Math.round((props.celsius.temperature * 9) / 5 + 32)}
          </span>
          <span id="units">
            <a href="/" onClick={showCelsius}>
              °C
            </a>
            <span> | °F</span>
          </span>
        </div>
        <div className="row" id="max-min">
          <div className="col max-min">
            max:{" "}
            <span id="max-temp">
              {Math.round((props.celsius.maxTemp * 9) / 5 + 32)}
            </span>
            <span className="unit" id="unit-max">
              °F
            </span>
          </div>
          <div className="col max-min">
            min:{" "}
            <span id="min-temp">
              {Math.round((props.celsius.minTemp * 9) / 5 + 32)}
            </span>
            <span className="unit" id="unit-min">
              °F
            </span>
          </div>
        </div>
      </div>
    );
  }
}
