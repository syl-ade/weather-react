import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

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
          <WeatherTemperature celsius={props.data} />
        </div>

        <div className="col" id="right-col">
          <div className="row box">
            <div className="clearfix">
              <WeatherIcon code={props.data.icon} />
            </div>
          </div>
          <div className="row box">
            <div className="description">{props.data.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
