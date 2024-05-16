import React from "react";
import style from "./City.module.css";
// import { useParams } from "react-router-dom";

// function onFilter(ciudadId) {
//   let ciudad = data.filter((c) => c.id === parseInt(ciudadId));
//   if (ciudad.length > 0) {
//     return ciudad[0];
//   } else {
//     return null;
//   }
// }

export default function Ciudad(props) {
  // console.log(city);
  // var params = useParams();
  // var city = city.find((e) => {
  //   return e.id.toString === params.ciudadId.toString;
  // });
  console.log("detalle", props.data);
  // render={({ match }) => (
  //   <City city={onFilter(match.params.ciudadId)} />
  // )}
  return (
    <div className="ciudad">
      <h1>estoy en ciudad</h1>

      <h4>{props.data[0].name}</h4>
      {/* <div className="container">
        <h2>{city.name}</h2>
        <div className="info">
          <div>Temperatura: {city.temp} ºC</div>
          <div>Clima: {city.weather}</div>
          <div>Viento: {city.wind} km/h</div>
          <div>Cantidad de nubes: {city.clouds}</div>
          <div>Latitud: {city.latitud}º</div>
          <div>Longitud: {city.longitud}º</div>
        </div>
      </div> */}
    </div>
  );
}
