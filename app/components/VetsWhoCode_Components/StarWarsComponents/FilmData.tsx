import React from 'react';
import { Films } from '../starWarsFetch';

type Props = {
  movieList: Films[];
}

const FilmData = (props: Props) => {

  return (
    <ul className='movie__list'>
      {props.movieList.map((movie) => {
          return <li className='list__item' key={movie.uuid}>{movie.title}</li>;
        })}
    </ul>
  );
}

export default FilmData;