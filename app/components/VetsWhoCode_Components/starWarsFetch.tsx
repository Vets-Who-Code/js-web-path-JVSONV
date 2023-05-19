"use client";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CharacterData from "./StarWarsComponents/CharacterData";
import FilmData from "./StarWarsComponents/FilmData";

export type Character = {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: string[];
  species: string[];
  starships: string[];
  url: string;
  created: string;
  edited: string;
};

export type Films = {
  uuid: string;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: string[];
  vehicles: string[];
  characters: string[];
  planets: string[];
  url: string;
  created: string;
  edited: string;
};

const starWars = () => {
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

    const delay = new Promise<unknown>((resolve) => setTimeout(resolve, 1000));

    setIsLoading(true);

    delay
      .then(() => fetch(`https://swapi.dev/api/peope/${randomNum}`))
      .then((res) => {
        if (!res.ok) throw new Error(`Error ${res.status}`);
        return res.json();
      })
      .then(async (res) => {
        await getAllMovieData(res.films);
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
    const allFilms = await Promise.all(
      filmsList.map((film) => getFilmData(film))
    );
    setFilmsData(allFilms);
  };

  const getFilmData = async (film: string) => {
    const filmData = await fetch(film, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });

    const movieData = await filmData.json();

    movieData.uuid = uuidv4();

    return movieData;
  };

  const loading = <p>Loading....</p>;

  const errorMessage = (
    <p className="error">
      Oops! Looks like something when wrong please check the console.
    </p>
  );

  return (
    <div>
      <h3>Like Star Wars? Click below to get a random character!</h3>
      {isLoading && loading}
      {characterData !== null && <CharacterData character={characterData} />}
      {filmsData !== null && <FilmData movieList={filmsData} />}
      {error !== null && (
        <div>
          <p className="error__message"><strong>{error}</strong></p>
          {errorMessage}
        </div>
      )}
      <button onClick={getCharacterData}>Get Character!</button>
    </div>
  );
};

export default starWars;
