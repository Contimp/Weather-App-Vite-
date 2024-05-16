import React from "react";
import { Routes, Route } from "react-router-dom";

import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import Ciudad from "./components/Ciudad.jsx";
import styles from "./App.module.css";

const apikey = import.meta.env.VITE_API_KEY;

function App() {
  const [data, setData] = React.useState([]);

  function onSearch(ciudad) {
    if (data.length > 2) {
      alert("You can't add more cities");
    } else {
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

            const exist = data.find((e) => e.id === ciudad.id);

            if (!exist) {
              setData((oldCities) => [...oldCities, ciudad]);
            }
          } else {
            alert("Ciudad no encontrada");
          }
        });
    }
  }

  function handleOnClose(id) {
    setData((prevData) => {
      return prevData.filter((city) => city.id !== id);
    });
  }

  function onFilter(ciudadId) {
    let ciudad = data.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div className={styles.app}>
      <div className={styles.bkg} />
      <div className={styles.container}>
        <div>
          <SearchBar onSearch={onSearch} />
        </div>
        <div className={styles.citiesContainer}>
          <div>
            {data.length > 0 && (
              <Card
                principal
                min={data[data.length - 1].min}
                max={data[data.length - 1].max}
                name={data[data.length - 1].name}
                img={data[data.length - 1].img}
                id={data[data.length - 1].id}
              />
            )}
          </div>
          <div>
            <Cards cities={data} onClose={handleOnClose} />
          </div>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Card />} />
            <Route
              path="/ciudad/:ciudadId"
              // element={({ match }) => (
              //   <Ciudad city={onFilter(match.params.ciudadId)} />
              // )}
              element={<Ciudad onFilter={onFilter} data={data} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
