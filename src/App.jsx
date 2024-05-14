import {useState,useEffect} from "react";
import "./App.css";
import FilmList from "./Filmlist";

const App = () => {
  const [films, setFilms] = useState([]);


useEffect(() => {
  fetch("/film.json").then(res=>res.json()).then(data=>setFilms(data.movies))
  

}, [])


  return (
    <>
      <FilmList films={films} />
    </>
  );
};

export default App;
