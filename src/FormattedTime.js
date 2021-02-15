import React from "react";

export default function FormattedTime(props) {
  let hours = props.getHours();
  let minutes = props.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <div>
      {hours}:{minutes}
    </div>
  );
}
