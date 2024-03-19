import React from "react";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import data, { Cairns } from "../data.jsx";
import styles from "./App.module.css";

const apikey = import.meta.env.VITE_API_KEY;

function onSearch(ciudad) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apikey}&units=metric`
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
        setCities((oldCities) => [...oldCities, ciudad]);
      } else {
        alert("Ciudad no encontrada");
      }
    });
}

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.bkg} />
      <div className={styles.container}>
        <div>
          <SearchBar onSearch={onSearch} />
        </div>
        <div className={styles.citiesContainer}>
          <div>
            <Card
              principal
              min={Cairns.main.temp_min}
              max={Cairns.main.temp_max}
              name={Cairns.name}
              img={Cairns.weather[0].icon}
              onClose={() => alert(Cairns.name)}
            />
          </div>
          <div>
            <Cards cities={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
