import { useState, useEffect } from "react";
import React from "react";

import "./App.css";
import FilmList from "./Filmlist";
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Film from "./Film";
import DescriptionPage from "./Dis";
import { useContext } from "react";
import MovieContext from "./context/Movie_context";

const App = () => {
  const { films ,handleInputChange} = useContext(MovieContext);
  console.log(films);

  return (
    <>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Search for a film..."
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FilmList films={films} />} />
          <Route path="/film/:id" element={<DescriptionPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
