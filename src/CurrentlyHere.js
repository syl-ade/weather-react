import React from "react";
import "./CurrentlyHere.css";

export default function CurrentlyHere(event) {
  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <button
      className="btn btn-primary w-150"
      id="current-button"
      onCLick={handleClick}
    >
      Currently here
    </button>
  );
}
