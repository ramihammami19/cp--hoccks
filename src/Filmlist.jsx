// src/FilmList.jsx
import React from 'react';
import Film from './Film';

const FilmList = ({ films }) => {
  return (
    <div>
      {films.length > 0 ? (
        <ul>
          {films.map((film) => (
            <li key={film.id}>
              <Film film={film} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No films found</p>
      )}
    </div>
  );
};

export default FilmList;
