import React, { useState } from "react";
import CityWeather from "./CityWeather";

const WeatherApp = () => {
  const [city, setCity] = useState("London");
  const [cityNameForWeather, setCityNameForWeather] = useState("London");

  const citysearch = (e) => {
    e.preventDefault();
    setCityNameForWeather(city);
  };
  return (
    <div className="container">
      <CityWeather cityName={cityNameForWeather} />
      <div className="row justify-content-center">
        <form onSubmit={citysearch}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input type="submit" className="btn btn-primary" value="Search!" />
        </form>
      </div>
    </div>
  );
};

export default WeatherApp;
