import React from "react";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
import SearchBar from "./components/SearchBar.jsx";
import data, { Cairns } from "../data.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.bkg} />
      <div className={styles.container}>
        <div>
          <SearchBar onSearch={(ciudad) => alert(ciudad)} />
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
