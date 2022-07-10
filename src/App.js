import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          This project was created by{" "}
          <a
            href="https://relaxed-rolypoly-3aaf9a.netlify.app/"
            target="_blank"
          >
            Anastasiia Maliuha
          </a>{" "}
          and is
          <a
            href="https://github.com/Anastasiia44/react-weather-app"
            target="_blank"
          >
            {" "}
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
