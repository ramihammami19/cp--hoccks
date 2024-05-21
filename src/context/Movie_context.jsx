import {createContext,useEffect,useState} from "react";

export const MovieContext = createContext();
export const MovieProvider = ({children}) => {
    const [films, setFilms] = useState([]);

    const handleInputChange = (e) => {
      const regex = new RegExp(e.target.value, "i");
      const filtred = films.filter((film) => regex.test(film.title));
      console.log(regex);
      setFilms(filtred);
    };
  
    useEffect(() => {
      fetch("/film.json")
        .then((res) => res.json())
        .then((data) => setFilms(data.movies));
    }, []);
  


    return (<MovieContext.Provider
        value={{
         films,setFilms,handleInputChange
        }}
    >
        {children}
    </MovieContext.Provider>);
};

export default MovieContext;