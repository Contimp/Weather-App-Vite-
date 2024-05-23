import React from "react";
import styles from "./CityDet.module.css";
import { useParams } from "react-router-dom";
import { GrRevert } from "react-icons/gr";
import { Link } from "react-router-dom";

export default function CityDet({ cities }) {
  const { ciudadId } = useParams();
  let city = cities.find((c) => c.id === parseInt(ciudadId));

  return (
    <div>
      <div className={styles.container}>
        <h2>{city.name}</h2>
        <div className={styles.info}>
          <div>Temperatura: {city.temp} ºC </div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>

        <Link to="/">
          <button className={styles.button}>
            <GrRevert />
          </button>
        </Link>
      </div>
    </div>
  );
}
