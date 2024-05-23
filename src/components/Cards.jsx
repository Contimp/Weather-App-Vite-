import React from "react";
import Card from "./Card.jsx";
import style from "./Cards.module.css";

export default function Cards({ cities, handleOnClose }) {
  return (
    <div className={style.container}>
      {cities.map((c) => (
        <Card
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          OnClose={() => handleOnClose(c.id)}
          key={c.id}
        />
      ))}
    </div>
  );
}
