import React from "react";
import styles from "./Home.module.css";

import SearchBar from "../components/SearchBar.jsx";
import Card from "../components/Card.jsx";
import Cards from "../components/Cards.jsx";

export default function Home({ cities, onSearch, handleOnClose }) {
  return (
    <div className={styles.home}>
      <div className={styles.bkg} />
      <div className={styles.container}>
        <SearchBar onSearch={onSearch} />
        <div className={styles.citiesContainer}>
          {cities.length > 0 && (
            <Card
              principal
              min={cities[cities.length - 1].min}
              max={cities[cities.length - 1].max}
              name={cities[cities.length - 1].name}
              img={cities[cities.length - 1].img}
              id={cities[cities.length - 1].id}
            />
          )}
          <Cards cities={cities} handleOnClose={handleOnClose} />
        </div>
      </div>
    </div>
  );
}
