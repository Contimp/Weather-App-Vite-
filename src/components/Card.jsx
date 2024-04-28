import React from "react";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ name, min, max, img, onClose, id, principal }) {
  // acá va tu código
  return (
    <Link to={`/ciudad/${id}`}>
      <div className={`${style.card} ${principal ? style.principal : ""}`}>
        <button className={style.button} onClick={onClose}>
          X
        </button>
        <h4 className={style.title}>{name}</h4>

        <section className={style.section}>
          <div className={style.temp}>
            <p>Min</p>
            <p className={style.num}>{min}</p>
          </div>
          <div className={style.temp}>
            <p>Max</p>
            <p className={style.num}>{max}</p>
          </div>
          <div>
            <img
              className={style.img}
              src={`http://openweathermap.org/img/wn/${img}@2x.png`}
              alt="weather image"
            />
          </div>
        </section>
      </div>
    </Link>
  );
}
