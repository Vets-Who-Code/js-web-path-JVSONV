"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import classes from "../../styles/starWars.module.css";
import Button from "../Utility_Components/Button";
import CharacterData from "./StarWarsComponents/CharacterData";
import FilmData from "./StarWarsComponents/FilmData";

export type Character = {
  name: string;
  gender: string;
  birth_year: string;
  height: string;
  hair_color: string;
  films: string[];
};

export type Films = {
  uuid: string;
  title: string;
};

const StarWars = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [characterData, setCharacterData] = useState<Character | null>(null);
  const [filmsData, setFilmsData] = useState<Films[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const randomNum = Math.floor(Math.random() * (83 - 1) + 1);

  const getCharacterData = () => {
    if (characterData !== null && filmsData !== null) {
      setCharacterData(null);
      setFilmsData(null);
    }

    if (error !== null) setError(null);

    const delay = new Promise<unknown>((resolve) => setTimeout(resolve, 1000));

    setIsLoading(true);

    delay
      .then(() => fetch(`https://swapi.dev/api/people/${randomNum}`))
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}`);
        return res.json();
      })
      .then(async (res) => {
        console.log(res);
        const allMovies = await getAllMovieData(res.films);
        setFilmsData(allMovies);
        setIsLoading(false);
        setCharacterData(res);
        return res;
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
        setError(err.message);
      });
  };

  const getAllMovieData = async (filmsList: string[]) => {
    return await Promise.all(filmsList.map((film) => getFilmData(film)));
  };

  const getFilmData = async (film: string) => {
    const filmData = await fetch(film, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });

    const movieData: Films = await filmData.json();

    movieData.uuid = uuidv4();

    return movieData;
  };

  const loading = <p className={classes.loading}>Loading....</p>;

  const errorMessage = (
    <p className="error">
      Oops! Looks like something when wrong please check the console.
    </p>
  );

  return (
    <div className={classes.starwars__wrapper}>
      <h3 className={classes.api__title}>
        Like Star Wars? Click below to get a random character!
      </h3>
      <div className={classes.data__container}>
        <div className={classes.api__data}>
          {isLoading && <p className={classes.loading}>Loading....</p>}
          {characterData !== null && (
            <CharacterData character={characterData} />
          )}
          {filmsData !== null && <FilmData movieList={filmsData} />}
          {error !== null && (
            <div>
              <p className="error__message">
                <strong>{error}</strong>
              </p>
              {errorMessage}
            </div>
          )}
        </div>
      </div>
      <Button
        innerText="Get Character!"
        class="call__out"
        onClickHandler={getCharacterData}
      />
    </div>
  );
};

export default StarWars;
