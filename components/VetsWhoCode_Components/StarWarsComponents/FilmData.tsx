import React from "react";
import classes from "../../../pages/CSS/starWars.module.css";
import { Films } from "../StarWarsFetch";

type Props = {
  movieList: Films[];
};

const FilmData = (props: Props) => {
  return (
    <ul className={`${classes.movie__list} ${classes.list}`}>
      Starred In:
      {props.movieList.map((movie) => {
        return (
          <li
            className={`${classes.movie} ${classes.list_item}`}
            key={movie.uuid}>
            {movie.title}
          </li>
        );
      })}
    </ul>
  );
};

export default FilmData;
