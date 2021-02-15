import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col" id="left-col">
          <div id="current-date">
            <FormattedDate date={props.data.date} />
          </div>

          <div id="parameters">
            <div>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </div>
            <div>
              Wind: <span id="wind">{props.data.wind}</span>
              <span id="wind-unit"> km/h</span>
            </div>

            <div>
              Pressure: <span id="pressure">{props.data.pressure}</span>
              <span id="pressure-unit"> hPa</span>
            </div>
          </div>
        </div>
        <div className="col" id="middle-col">
          <div id="current-location">{props.data.city}</div>
          <div id="temperature">
            <span id="current-temperature">
              {Math.round(props.data.temperature)}
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
              max: <span id="max-temp">{Math.round(props.data.maxTemp)}</span>
              <span className="unit" id="unit-max"></span>
            </div>
            <div className="col max-min">
              min: <span id="min-temp">{Math.round(props.data.minTemp)}</span>
              <span className="unit" id="unit-min"></span>
            </div>
          </div>
        </div>

        <div className="col" id="right-col">
          <div className="row">
            <img src={props.data.iconUrl} alt={props.data.description} />
          </div>
          <div className="row">
            <div className="description">{props.data.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
