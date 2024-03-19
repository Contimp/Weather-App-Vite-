import React from "react";
import Card from "./Card.jsx";
import style from "./Cards.module.css";

export default function Cards(props) {
  return (
    <div className={style.container}>
      {props.cities.map((c) => (
        <Card
          max={c.main.temp_max}
          min={c.main.temp_min}
          name={c.name}
          img={c.weather[0].icon}
          onClose={() => alert(c.name)}
          key={c.id}
          id={c.id}
        />
      ))}
    </div>
  );
}
