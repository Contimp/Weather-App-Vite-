import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./Home.jsx";
import City from "./components/City.jsx";

// function onFilter(data, ciudadId) {
//   let ciudad = data.filter((c) => c.id === parseInt(ciudadId));
//   if (ciudad.length > 0) {
//     return ciudad[0];
//   } else {
//     return null;
//   }
// }

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/home" element={<Home />} />
        <Route
          path="/ciudad/:ciudadId"
          render={({ match }) => <City city={onFilter(match.params.ciudad)} />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
