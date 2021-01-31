import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState(" ");
  function handleSubmit(event) {
    event.preventDefault();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div>
      <form className="Search" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Type a location..."
          className="text"
          onChange={updateCity}
        />
        <input type="submit" value="Check the weather" className="submit" />
      </form>
      <button id="current-button">Current</button>
    </div>
  );
}
