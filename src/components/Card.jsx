import React from "react";
import style from "./Card.module.css";

export default function Card(props) {
  // acá va tu código
  return (
    <div className={`${style.card} ${props.principal ? style.principal : ""}`}>
      <button className={style.button} onClick={props.onClose}>
        X
      </button>
      <h4 className={style.title}>{props.name}</h4>
      <section className={style.section}>
        <div className={style.temp}>
          <p>Min</p>
          <p>{props.min}</p>
        </div>
        <div className={style.temp}>
          <p>Max</p>
          <p>{props.max}</p>
        </div>
        <div>
          <img
            className={style.img}
            src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
            alt="weather image"
          />
        </div>
      </section>
    </div>
  );
}
