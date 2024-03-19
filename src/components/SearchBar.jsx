import React from "react";
import style from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSearch }) {
  // acá va tu código
  const handleOnSearch = () =>
    onSearch(document.getElementById("searchInput").value);

  return (
    <div>
      <input
        id="searchInput"
        placeholder="Add City..."
        className={style.input}
        type="text"
      />
      <button className={style.button} onClick={handleOnSearch}>
        <FaSearch />
      </button>
    </div>
  );
}
