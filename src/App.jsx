import React from "react";
import { Routes, Route } from "react-router-dom";
// import styles from "./App.module.css";

import Home from "./pages/Home";
import CityDet from "./pages/CityDet";

const apikey = import.meta.env.VITE_API_KEY;

export default function App() {
  const [cities, setCities] = React.useState([]);

  function onSearch(ciudad) {
    if (cities.length > 2) {
      alert("You can't add more cities");
    } else {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&units=metric`
      )
        .then((r) => r.json())
        .then((recurso) => {
          if (recurso.main !== undefined) {
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon,
            };

            const exist = cities.find((e) => e.id === ciudad.id);

            if (!exist) {
              setCities((oldCities) => [...oldCities, ciudad]);
            }
          } else {
            alert("Ciudad no encontrada");
          }
        });
    }
  }
  function handleOnClose(id) {
    setCities((prevData) => {
      return prevData.filter((city) => city.id !== id);
    });
  }
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              cities={cities}
              onSearch={(ciudad) => {
                onSearch(ciudad);
              }}
              handleOnClose={(id) => {
                handleOnClose(id);
              }}
            />
          }
        />
        <Route path="/ciudad/:ciudadId" element={<CityDet cities={cities} />} />
      </Routes>
    </div>
  );
}
