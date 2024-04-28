import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";
import styles from "../components/Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.container}>
        <h4>contimariapamela@gmail.com</h4>
        <a href="https://github.com/Contimp?tab=repositories" target="_blank">
          <img className={styles.img} src={github} alt="logo github" />
        </a>
        <a href="https://www.linkedin.com/in/contimariapamela/" target="_blank">
          <img className={styles.img} src={linkedin} alt="logo linkedin" />
        </a>
        <a href="http://wa.me/+5492615254453" target="_blank">
          <img className={styles.img} src={whatsapp} alt="logo whatsapp" />
        </a>
      </div>
    </>
  );
}
