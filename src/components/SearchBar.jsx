import React from "react";
import style from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSearch }) {
  // acá va tu código

  const [search, setSearch] = React.useState('')

  const handleOnSearch = () => {
    // const input = document.getElementById("searchInput");
    // onSearch(input.value);
    // input.value = "";
    onSearch(search);
    setSearch('');
  };
  return (
    <div>
      <input
        id="searchInput"
        placeholder="Add City..."
        className={style.input}
        type="text"
        value= {search}
        onChange={(e)=>setSearch(e.target.value)}
      />
      <button className={style.button} onClick={handleOnSearch}>
        <FaSearch />
      </button>
    </div>
  );
}
