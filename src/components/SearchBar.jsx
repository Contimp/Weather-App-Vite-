import React from "react";
import style from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBar(props) {
  // acá va tu código
  return (
    <div>
      <input className={style.input} type="text" placeholder="City..." />
      <button
        className={style.button}
        onClick={() => props.onSearch("Buscando...")}
      >
        <FaSearch />
      </button>
    </div>
  );
}
