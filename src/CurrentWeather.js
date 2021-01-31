import React from "react";
import "./CurrentWeather.css";
import { Sun } from "@dcp-ui/icons.sun";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col" id="details">
          <div id="current-date">-- -- -- --</div>
          <div id="current-time">--:--</div>
          <div id="parameters">
            <div>
              Humidity: <span id="humidity"></span>%
            </div>
            <div>
              Wind: <span id="wind"></span>
              <span id="wind-unit"> km/h</span>
            </div>

            <div>
              Pressure: <span id="pressure"></span>
              <span id="pressure-unit"> hPa</span>
            </div>
          </div>
        </div>
        <div className="col">
          <div id="current-location">-- -- -- --</div>
          <div id="temperature">
            <span id="current-temperature">--</span>
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
              max: <span id="max-temp"></span>
              <span className="unit" id="unit-max"></span>
            </div>
            <div className="col max-min">
              min: <span id="min-temp"></span>
              <span className="unit" id="unit-min"></span>
            </div>
          </div>
        </div>
        <div className="col">
          <Sun />
        </div>
      </div>
    </div>
  );
}
