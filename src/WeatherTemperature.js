import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span className="temperature">
      {Math.round(props.celsius)}
      <span className="unit">°C</span>
    </span>
  );
}
