import React from "react";
import styles from "./Header.module.css";
import vite from "../assets/vite.svg";
import react from "../assets/react.svg";
import jslogo from "../assets/jslogo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <Link to="/home">
          <h1 className={styles.title}>Weather App</h1>
        </Link>
        <h1>
          React
          <img src={react} className={styles.logo} id="logo" />
          Js
          <img src={jslogo} className={styles.logo} id="logo" />
          Vite
          <img src={vite} className={styles.logo} id="logo" />
        </h1>
      </div>
    </>
  );
}
